import { compartment as langCmpt } from './get-lang-ext'

const plugins = {}

const getPrettierOptions = async langId => {
  initPlugins(langId)

  const parserByLang = { js: 'babel', json: 'json', ts: 'typescript' }

  return {
    parser: parserByLang[langId],
    plugins: await plugins[langId],
  }
}

const format = ({ state, dispatch }) => {
  const code = state.doc.toString()

  format()

  async function format() {
    try {
      const langExt = langCmpt.get(state)
      const langId = langExt.language.name === 'typescript' ? 'ts' : 'js'
      let formattedCode = await formatCode(code, langId)

      if (!code.endsWith('\n') && formattedCode.endsWith('\n'))
        formattedCode = formattedCode.slice(0, -1)

      if (code === formattedCode) return

      const changes = await getChanges(code, formattedCode)
      const transaction = state.update({ changes })
      dispatch(transaction)
    } catch (err) {
      console.error('error formatting code\n', err)
    }
  }

  return true
}

async function getChanges(code, formattedCode) {
  const fastDiff = (await import('fast-diff')).default
  const changeType = {
    delete: fastDiff.DELETE,
    equal: fastDiff.EQUAL,
    insert: fastDiff.INSERT,
  }
  const diff = fastDiff(code, formattedCode)

  const changes = []
  let curPos = 0

  for (let i = 0; i < diff.length; i += 1) {
    const [type, text] = diff[i]
    if (type === changeType.equal) {
      curPos += text.length
    } else if (type === changeType.insert) {
      changes.push({ from: curPos, to: curPos, insert: text })
    } else {
      // type === changeType.delete
      const nextDiff = diff[i + 1]
      if (!nextDiff || nextDiff[0] === changeType.equal) {
        changes.push({ from: curPos, to: curPos + text.length, insert: '' })
        curPos += text.length
      } else {
        // at this point nextDiff type must be 'insert'.  In this case let's
        // translate it to a 'replace'
        const updatedText = nextDiff[1]
        changes.push({
          from: curPos,
          to: curPos + text.length,
          insert: updatedText,
        })
        curPos += text.length
        i += 1
      }
    }
  }

  return changes
}

async function formatCode(code, langId) {
  const prettier = (await import('prettier/standalone')).default
  const prettierOptions = await getPrettierOptions(langId)
  return await prettier.format(code, {
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
    ...prettierOptions,
  })
}

function initPlugins(langId) {
  if (plugins[langId]) return

  plugins[langId] = new Promise(async (resolve, reject) => {
    try {
      const estree = (await import('prettier/plugins/estree')).default
      if (['json', 'js'].includes(langId)) {
        const babel = (await import('prettier/plugins/babel')).default
        resolve([estree, babel])
      } else {
        const typescript = (await import('prettier/plugins/typescript')).default
        resolve([estree, typescript])
      }
    } catch (err) {
      reject(err)
    }
  })
}

export default format
export { formatCode }
