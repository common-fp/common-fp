import path from 'node:path'
import { validateTests } from '@common-fp/test-utils'
import { globby } from 'globby'

const { dirname } = import.meta
const fromRoot = fpath => path.resolve(dirname, '..', fpath)
const srcDir = fromRoot('./src')

const dirsToValidate = await globby('./**/*', {
  cwd: srcDir,
  onlyDirectories: true,
})
dirsToValidate.push('./')

suite('ensure all utils are tested', () => {
  for (const d of dirsToValidate) {
    suite(d, () => {
      validateTests(d, {
        testDir: './test-types',
        // test-types/shared-types.ts shows we're exporting shared-types, so
        // it's not a utility test like all the others
        removeFromExpected: ['shared-types.ts'],
      })
    })
  }
})
