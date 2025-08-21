import path from 'node:path'
import { format } from 'prettier'
import { expect } from 'chai'
import { caseNames, myCamelCase, readCases } from './utils.mjs'
import defaultPrettierCfg from '../prettier.config.mjs'

const { dirname } = import.meta

const fromRoot = fpath => path.resolve(dirname, '..', fpath)

const caseOpts = {
  singleLineOver50Chars: {
    printWidth: 50,
  },
  multipleCommentsUnder50Chars: {
    printWidth: 50,
  },
  nestedDoubleSlash: {
    printWidth: 50,
  },
}

suite('simple cases', () => {
  let expected
  let unformatted

  suiteSetup(async () => {
    ;({ expected, unformatted } = await readCases())
  })

  suite('typescript parser', () => {
    caseNames.forEach(n => testCase(n, 'typescript'))
  })

  suite('babel parser', () => {
    caseNames.forEach(n => testCase(n, 'babel'))
  })

  //
  //------------------//
  // Helper Functions //
  //------------------//

  function testCase(name, parser) {
    const codeName = myCamelCase(name)

    test(name, async () => {
      const unformattedCode = unformatted[codeName]
      const actual = await format(unformattedCode, {
        ...defaultPrettierCfg,
        parser,
        plugins: [fromRoot('src/index.mjs')],
        ...(caseOpts[codeName] || {}),
      })
      expect(actual).to.equal(expected[codeName])
    })
  }
})
