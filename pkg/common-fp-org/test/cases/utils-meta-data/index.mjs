/**
 * This is an incomplete suite of tests which I'll build out as-needed
 *
 * I'm adding it since I missed a srcDir on negate, so I want to make sure it's
 * not missing on other utilities
 */

import { expect } from 'chai'
import getUtilityToSrcDir from './get-utility-to-src-dir.mjs'

suite('utils-meta-data', () => {
  /**
   * note: this is a stop-gap til I generate srcDir as part of a build step
   */
  test('srcDir', async () => {
    const { actual, expected } = await getUtilityToSrcDir()
    expect(actual).to.deep.equal(expected)
  })
})
