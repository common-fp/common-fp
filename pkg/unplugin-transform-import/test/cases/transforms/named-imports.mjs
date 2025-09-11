import { expect } from 'chai'
import { parseImportsExports } from 'parse-imports-exports'
import MagicString from 'magic-string'
import transform from '#transforms/named-imports'
import dedent from 'dedent'

const input = dedent(`
  import {
    camelName,
    camelNameOrig as camelNameAlias,
    // comments stripped
    type ignoredType
  } from 'common-fp'
`)

const output = dedent(`
  import camelName from 'common-fp/camel-name'
  import camelNameAlias from 'common-fp/camel-name-orig'
`)

test('named-imports', () => {
  const parsed = parseImportsExports(input).namedImports['common-fp']
  const ms = new MagicString(input)
  transform({ parsed, ms })
  expect(ms.toString()).to.equal(output)
})
