import { deleteAsync } from 'del'
import { expect } from 'chai'
import { rollup } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import { fromTestDir, getBundleDirName } from '../utils.mjs'

const bundleDirName = getBundleDirName('rollup')

suite('tree shaking works in rollup', () => {
  suiteTeardown(async () => {
    await deleteAsync(fromTestDir(`bundles/${bundleDirName}`))
  })

  test('root module', async () => {
    const { bundle, writeResult } = await build('root')
    expect(writeResult.output).to.have.lengthOf(1)
    expect(getShallowModuleIds(writeResult)).to.deep.equal([
      'shared-internals/dist/deps/type-detect.mjs',
      'shared-internals/dist/get-type.mjs',
      'shared-internals/dist/assert-arg-is-type.mjs',
      'common-fp/dist/add.mjs',
      'test-misc/test/entry-root.mjs',
    ])

    // this assertion shows the number of modules rollup has to process in order
    // to tree-shake down to its output.  Compare this to the subpath test.
    expect(bundle.cache.modules.length).to.be.above(100)

    await bundle.close()
  })

  test('subpath', async () => {
    const { bundle, writeResult } = await build('subpath')

    expect(writeResult.output).to.have.lengthOf(1)
    expect(getShallowModuleIds(writeResult)).to.deep.equal([
      'shared-internals/dist/deps/type-detect.mjs',
      'shared-internals/dist/get-type.mjs',
      'shared-internals/dist/assert-arg-is-type.mjs',
      'common-fp/dist/add.mjs',
      'test-misc/test/entry-subpath.mjs',
    ])

    expect(bundle.cache.modules.length).to.equal(5)

    await bundle.close()
  })
})

async function build(name) {
  const inputOpts = {
    input: fromTestDir(`entry-${name}.mjs`),
    plugins: [nodeResolve()],
  }

  const bundle = await rollup(inputOpts)

  const outputOpts = {
    file: fromTestDir(`bundles/${bundleDirName}/${name}.mjs`),
  }
  const writeResult = await bundle.write(outputOpts)

  return { bundle, writeResult }
}

function getShallowModuleIds(writeResult) {
  return writeResult.output[0].moduleIds.map(p =>
    p.replace(/.*common-fp\/pkg\/(.*?)/, '$1')
  )
}
