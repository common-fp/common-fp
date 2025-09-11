import { expect } from 'chai'
import { parseImportsExports } from 'parse-imports-exports'
import MagicString from 'magic-string'
import transform from '#transforms/named-reexports'
import dedent from 'dedent'

const input = dedent(`
  export {
    camelName,
    camelNameOrig as camelNameAlias,
    // comments stripped
    type ignoredType
  } from 'common-fp'
`)

const output = dedent(`
  export { default as camelName } from 'common-fp/camel-name'
  export { default as camelNameAlias } from 'common-fp/camel-name-orig'
`)

test('named-reexports', () => {
  const parsed = parseImportsExports(input).namedReexports['common-fp']
  const ms = new MagicString(input)
  transform({ parsed, ms })
  expect(ms.toString()).to.equal(output)
})
