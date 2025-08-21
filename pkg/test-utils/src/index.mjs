import fsp from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { expect } from 'chai'
import createStubResource from './create-stub-resource.mjs'
import mapTo from './map-to.mjs'
import spy from './spy.mjs'
import validateGetFnArgs from './validate-get-fn-args.mjs'

const fromRoot = fpath => path.resolve(process.cwd(), fpath)

const objToMap = obj => new Map(Object.entries(obj))

/**
 * note: a 'Resource' is anything with a setup and/or teardown method which will
 * be called before and after every test.  This avoids boilerplate code where
 * we would either declare setup/teardown explicitly or, in the case of a test,
 * would have to surround it in a try/finally
 */
const suiteWithResources = (name, resources, fn) => {
  suite(name, async () => {
    setup(async () => Promise.all(resources.map(r => r.setup?.())))
    teardown(async () => Promise.all(resources.map(r => r.teardown?.())))
    await fn()
  })
}

const testWithResources = (name, resources, fn) => {
  test(name, async () => {
    try {
      await Promise.all(resources.map(r => r.setup?.()))
      await fn()
    } finally {
      await Promise.all(resources.map(r => r.teardown?.()))
    }
  })
}

/**
 * This ensures we're testing what we should.  For example, if we add a
 * common-fp utility, then this will validate we have a test for that utility.
 */
const validateTests = (dirName, opts = {}) => {
  const {
    srcDir = './src/',
    testDir = './test/cases',
    removeFromExpected = [],
  } = opts
  const removeFromExpectedSet = new Set(removeFromExpected)
  const fromSrc = fpath => path.resolve(fromRoot(srcDir), fpath)
  const fromTestCases = fpath => path.resolve(fromRoot(testDir), fpath)

  const isTestableFile = f => {
    const testableExts = ['js', 'ts', 'mjs']
    return (
      f.isFile() &&
      !f.name.startsWith('index.') &&
      testableExts.some(ext => f.name.endsWith('.' + ext))
    )
  }

  test('tests', async () => {
    const tests = (
      await fsp.readdir(fromTestCases(dirName), { withFileTypes: true })
    )
      .filter(isTestableFile)
      .filter(f => !removeFromExpectedSet.has(f.name))
      .map(f => f.name)
      .sort()

    const expectedTests = (
      await fsp.readdir(fromSrc(dirName), { withFileTypes: true })
    )
      .filter(isTestableFile)
      .map(f => f.name)
      .sort()

    // in our *-types packages, the tests are regular typescript files where the
    // types are type definition files.  For some reason it feels odd to me to
    // write our tests as definition files even though that would work - instead
    // we're handling that mismatch here
    const isTsFile = fname => /(?<!\.d)\.ts$/.test(fname)
    const isTsDefFile = fname => fname.endsWith('.d.ts')
    if (tests.every(isTsFile) && expectedTests.every(isTsDefFile)) {
      const expectedTsTests = expectedTests.map(fname =>
        fname.replace(/\.d\.ts$/, '.ts')
      )
      expect(tests).to.deep.equal(expectedTsTests)
    } else {
      expect(tests).to.deep.equal(expectedTests)
    }
  })
}

const waitMs = ms => new Promise(res => setTimeout(res, ms))

export {
  createStubResource,
  mapTo,
  objToMap,
  spy,
  suiteWithResources,
  testWithResources,
  validateGetFnArgs,
  validateTests,
  waitMs,
}
