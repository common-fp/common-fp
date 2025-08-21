import { kebabCase } from 'change-case'
import { globby } from 'globby'
import apiData from '#test/data/api/index'
import miscData from '#test/data/misc'
import pagesData from '#test/data/pages'
import { fromRoot, toShallowCodeExamplePath } from '#test/utils'

suite('code-examples', () => {
  suite('all are covered', () => {
    test('api', async () => {
      const allJsExamples = fromRoot('code-examples/api/*/code/*.js')
      const fullJsExamples = fromRoot('code-examples/api/*/code/*_full.js')
      const arr = await globby([allJsExamples, `!${fullJsExamples}`])
      const codeExampleRawPaths = new Set(arr.map(toShallowCodeExamplePath))

      for (const [utilName, utilData] of Object.entries(apiData)) {
        for (const testName of Object.keys(utilData)) {
          const [utilDirName, testFileName] = [utilName, testName].map(
            kebabCase
          )
          const testedPath = `code-examples/api/${utilDirName}/code/${testFileName}.js`
          if (!codeExampleRawPaths.delete(testedPath)) {
            throw new Error(`testedPath not found: ${testedPath}`)
          }
        }
      }

      if (codeExampleRawPaths.size) {
        const msg =
          'the following code examples are not being tested\n' +
          [...codeExampleRawPaths].map(p => `  ${p}`).join('\n')

        throw new Error(msg)
      }
    })

    test('misc', async () => {
      const allJsExamples = fromRoot('code-examples/misc/code/*.js')
      const fullJsExamples = fromRoot('code-examples/misc/code/*_full.js')
      const arr = await globby([allJsExamples, `!${fullJsExamples}`])
      const codeExampleRawPaths = new Set(arr.map(toShallowCodeExamplePath))

      for (const testName of Object.keys(miscData.misc)) {
        const testFileName = kebabCase(testName)
        const testedPath = `code-examples/misc/code/${testFileName}.js`
        if (!codeExampleRawPaths.delete(testedPath)) {
          throw new Error(`testedPath not found: ${testedPath}`)
        }
      }

      if (codeExampleRawPaths.size) {
        const msg =
          'the following code examples are not being tested\n' +
          [...codeExampleRawPaths].map(p => `  ${p}`).join('\n')

        throw new Error(msg)
      }
    })

    test('pages', async () => {
      const allJsExamples = fromRoot('code-examples/pages/*/code/*.js')
      const fullJsExamples = fromRoot('code-examples/pages/*/code/*_full.js')
      const arr = await globby([allJsExamples, `!${fullJsExamples}`])
      const codeExampleRawPaths = new Set(arr.map(toShallowCodeExamplePath))

      for (const [pageName, data] of Object.entries(pagesData)) {
        for (const testName of Object.keys(data)) {
          const [utilDirName, testFileName] = [pageName, testName].map(
            kebabCase
          )
          const testedPath = `code-examples/pages/${utilDirName}/code/${testFileName}.js`
          if (!codeExampleRawPaths.delete(testedPath)) {
            throw new Error(`testedPath not found: ${testedPath}`)
          }
        }
      }

      if (codeExampleRawPaths.size) {
        const msg =
          'the following code examples are not being tested\n' +
          [...codeExampleRawPaths].map(p => `  ${p}`).join('\n')

        throw new Error(msg)
      }
    })
  })
})
