import dedent from 'dedent'
import { prepend } from '@/fp-utils'

const simpleJoinPath = strArr => {
  validateStrArr(strArr)

  if (!strArr.length) return ''

  let [seg1, ...resArr] = strArr.filter(removeEmptyStrings)
  resArr = resArr.map(prepend('/'))
  const res = collapseSlashes([seg1, ...resArr].join(''))
  return res
}

function validateStrArr(strArr) {
  const invalidVal = strArr.find(
    str => !['string', 'undefined'].includes(typeof str)
  )
  if (invalidVal !== undefined) {
    throw new Error(
      dedent(`
        at least one non-string, defined value passed to simpleJoinPath: ${invalidVal}

        typeof invalidVal: ${typeof invalidVal}
      `)
    )
  }
}

function collapseSlashes(str) {
  const collapseSlashesRe = /(\/\/+)/g
  return str.replaceAll(collapseSlashesRe, '/')
}

function removeEmptyStrings(str) {
  return str !== ''
}

export default simpleJoinPath
