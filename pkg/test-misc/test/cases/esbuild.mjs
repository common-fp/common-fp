import { expect } from 'chai'
import { deleteAsync } from 'del'
import * as esbuild from 'esbuild'
import * as _ from 'common-fp'
import transformImportPlugin from '@common-fp/unplugin-transform-import/esbuild'
import { fromTestDir, getBundleDirName } from '../utils.mjs'

const bundleDirName = getBundleDirName('esbuild')

suite('tree shaking works in esbuild', () => {
  suiteTeardown(async () => {
    await deleteAsync(fromTestDir(`bundles/${bundleDirName}`))
  })

  test('root module', async () => {
    const result = await build('root')

    expect(result.errors).to.deep.equal([])
    expect(result.warnings).to.deep.equal([])
    expect(result.metafile.outputs).has.all.keys([
      `bundles/${bundleDirName}/root.mjs`,
    ])

    // this assertion shows how many imports esbuild has to process in order to
    // achieve its output.  Compare this with metafile.inputs in the
    // sub-path test
    expect(Object.keys(result.metafile.inputs).length).to.be.above(100)

    const rootOutput =
      result.metafile.outputs[`bundles/${bundleDirName}/root.mjs`]
    expect(rootOutput.imports).to.deep.equal([])
    expect(rootOutput.exports).to.deep.equal([])
    expect(rootOutput.entryPoint).to.equal('entry-root.mjs')
    expect(rootOutput.inputs).has.all.keys([
      '../../shared-internals/dist/deps/type-detect.mjs',
      '../../shared-internals/dist/get-type.mjs',
      '../../shared-internals/dist/assert-arg-is-type.mjs',
      '../../common-fp/dist/add.mjs',
      '../../common-fp/dist/index.mjs',
      'entry-root.mjs',
    ])
  })

  test('root module with plugin', async () => {
    const result = await build('root', [transformImportPlugin()])

    expect(result.errors).to.deep.equal([])
    expect(result.warnings).to.deep.equal([])
    expect(result.metafile.outputs).has.all.keys([
      `bundles/${bundleDirName}/root.mjs`,
    ])

    // here we show that by using the plugin, esbuild has reduced the number of
    // modules processed to be greatly reduced, and equal to 'subpath'
    expect(result.metafile.inputs).has.all.keys([
      '../../shared-internals/dist/deps/type-detect.mjs',
      '../../shared-internals/dist/get-type.mjs',
      '../../shared-internals/dist/assert-arg-is-type.mjs',
      '../../common-fp/dist/add.mjs',
      'entry-root.mjs',
    ])

    const rootOutput =
      result.metafile.outputs[`bundles/${bundleDirName}/root.mjs`]
    expect(rootOutput.imports).to.deep.equal([])
    expect(rootOutput.exports).to.deep.equal([])
    expect(rootOutput.entryPoint).to.equal('entry-root.mjs')
    expect(rootOutput.inputs).has.all.keys([
      '../../shared-internals/dist/deps/type-detect.mjs',
      '../../shared-internals/dist/get-type.mjs',
      '../../shared-internals/dist/assert-arg-is-type.mjs',
      '../../common-fp/dist/add.mjs',
      'entry-root.mjs',
    ])
  })

  test('subpath', async () => {
    const result = await build('subpath')
    expect(result.errors).to.deep.equal([])
    expect(result.warnings).to.deep.equal([])
    expect(result.metafile.outputs).has.all.keys([
      `bundles/${bundleDirName}/subpath.mjs`,
    ])
    expect(result.metafile.inputs).has.all.keys([
      '../../shared-internals/dist/deps/type-detect.mjs',
      '../../shared-internals/dist/get-type.mjs',
      '../../shared-internals/dist/assert-arg-is-type.mjs',
      '../../common-fp/dist/add.mjs',
      'entry-subpath.mjs',
    ])

    const rootOutput =
      result.metafile.outputs[`bundles/${bundleDirName}/subpath.mjs`]
    expect(rootOutput.imports).to.deep.equal([])
    expect(rootOutput.exports).to.deep.equal([])
    expect(rootOutput.entryPoint).to.equal('entry-subpath.mjs')
    expect(rootOutput.inputs).has.all.keys([
      '../../shared-internals/dist/deps/type-detect.mjs',
      '../../shared-internals/dist/get-type.mjs',
      '../../shared-internals/dist/assert-arg-is-type.mjs',
      '../../common-fp/dist/add.mjs',
      'entry-subpath.mjs',
    ])
  })
})

async function build(name, plugins = []) {
  const result = await esbuild.build({
    absWorkingDir: fromTestDir(''),
    entryPoints: [fromTestDir(`entry-${name}.mjs`)],
    bundle: true,
    logLevel: 'error',
    outfile: fromTestDir(`bundles/${bundleDirName}/${name}.mjs`),
    metafile: true,
    plugins,
  })

  // we filter these out because even though esbuild says "types" is unused,
  // other packages use it and I have tests proving it's necessary.
  const typesWarning =
    'The condition "types" here will never be used as it comes after both "import" and "require"'

  result.warnings = result.warnings.filter(obj => obj.text !== typesWarning)

  return result
}
