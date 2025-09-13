import { deleteAsync } from 'del'
import { expect } from 'chai'
import webpack from 'webpack'
import transformImportPlugin from '@common-fp/unplugin-transform-import/webpack'
import { fromTestDir, getBundleDirName } from '../utils.mjs'

const bundleDirName = getBundleDirName('webpack')

suite('tree shaking works in webpack', () => {
  suiteTeardown(async () => {
    await deleteAsync(fromTestDir(`bundles/${bundleDirName}`))
  })

  test('root module', async () => {
    const stats = await build('root')

    // this assertion shows the number of modules webpack processes in order to
    // tree-shake down to its output.  Compare this to the subpath test.
    expect(stats.compilation.modules.size).to.be.above(100)
    expect(getChunkModuleIds(stats)).to.deep.equal([
      '../../common-fp/dist/add.mjs',
      '../../shared-internals/dist/assert-arg-is-type.mjs',
      '../../shared-internals/dist/deps/type-detect.mjs',
      '../../shared-internals/dist/get-type.mjs',
      './entry-root.mjs',
    ])
  })

  test('root module with plugin', async () => {
    const stats = await build('root', [transformImportPlugin()])

    const compilationModules = getCompilationModuleFpaths(stats)
    // here we show that by using the plugin, webpack has reduced the number of
    // modules processed to be greatly reduced, and equal to 'subpath'
    expect(compilationModules).to.deep.equal([
      'test-misc/test/entry-root.mjs',
      'common-fp/dist/add.mjs',
      'shared-internals/dist/assert-arg-is-type.mjs',
      'shared-internals/dist/get-type.mjs',
      'shared-internals/dist/deps/type-detect.mjs',
    ])
    expect(getChunkModuleIds(stats)).to.deep.equal([
      '../../common-fp/dist/add.mjs',
      '../../shared-internals/dist/assert-arg-is-type.mjs',
      '../../shared-internals/dist/deps/type-detect.mjs',
      '../../shared-internals/dist/get-type.mjs',
      './entry-root.mjs',
    ])
  })

  test('subpath', async () => {
    const stats = await build('subpath')

    const compilationModules = getCompilationModuleFpaths(stats)
    expect(compilationModules).to.deep.equal([
      'test-misc/test/entry-subpath.mjs',
      'common-fp/dist/add.mjs',
      'shared-internals/dist/assert-arg-is-type.mjs',
      'shared-internals/dist/get-type.mjs',
      'shared-internals/dist/deps/type-detect.mjs',
    ])
    // the compilationModules above are our code, the other three are builtin
    // webpack modules
    expect(stats.compilation.modules.size).to.equal(8)

    expect(getChunkModuleIds(stats)).to.deep.equal([
      '../../common-fp/dist/add.mjs',
      '../../shared-internals/dist/assert-arg-is-type.mjs',
      '../../shared-internals/dist/deps/type-detect.mjs',
      '../../shared-internals/dist/get-type.mjs',
      './entry-subpath.mjs',
    ])
  })
})

async function build(name, plugins = []) {
  return new Promise((res, rej) => {
    try {
      const config = {
        context: fromTestDir(''),
        devtool: false,
        entry: `./entry-${name}.mjs`,
        mode: 'development',
        output: {
          filename: `${name}.mjs`,
          path: fromTestDir(`bundles/${bundleDirName}`),
        },
        plugins,
      }
      webpack(config, (err, stats) => {
        try {
          if (err) rej(err)
          if (stats.hasErrors()) {
            const statsErr = new Error(
              "error during webpack bundling.  See property 'errors'"
            )
            statsErr.errors = stats.toJson().errors
            console.error('errors\n', statsErr.errors)
            rej(statsErr)
          }

          res(stats)
        } catch (err) {
          rej(err)
        }
      })
    } catch (err) {
      rej(err)
    }
  })
}

function getChunkModuleIds(stats) {
  return stats
    .toJson()
    .chunks[0].modules.map(m => m.id)
    .filter(Boolean)
}

function getCompilationModuleFpaths(stats) {
  return [...stats.compilation.modules]
    .map(m => m.resource)
    .filter(Boolean)
    .map(m => m.replace(/.*\/common-fp\/pkg\/(.*)/, '$1'))
}
