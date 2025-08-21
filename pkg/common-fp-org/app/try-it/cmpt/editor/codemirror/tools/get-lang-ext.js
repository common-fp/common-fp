/**
 * I don't like the default auto-completions and don't think there's a config to
 * turn them off.  Re-creating it here works well enough
 */
import { LanguageSupport } from '@codemirror/language'
import { Compartment } from '@codemirror/state'

const compartment = new Compartment()
const langExt = {}
let langSupportArg

const getLangExt = async langId => {
  initLangExt(langId)

  return await langExt[langId]
}

async function initLangExt(langId) {
  if (langExt[langId]) return

  langExt[langId] = new Promise(async (resolve, reject) => {
    try {
      const { javascriptLanguage, typescriptLanguage, localCompletionSource } =
        await import('@codemirror/lang-javascript')

      if (!langSupportArg) {
        langSupportArg = [
          javascriptLanguage.data.of({
            autocomplete: localCompletionSource,
          }),
        ]
      }

      const lang = langId === 'js' ? javascriptLanguage : typescriptLanguage

      resolve(new LanguageSupport(lang, langSupportArg))
    } catch (err) {
      reject(err)
    }
  })
}

export default getLangExt
export { compartment }
