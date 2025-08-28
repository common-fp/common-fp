import { expect } from 'chai'
import { createStubResource, testWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pWaitMs from '#lib/async/p-wait-ms'

suite('p-wait-ms', () => {
  const setTimeoutResource = createStubResource(global, 'setTimeout')

  testWithResources('waits ms', [setTimeoutResource], async () => {
    const ms = 50
    await pWaitMs(ms)
    const setTimeoutCalls = setTimeoutResource.stub.calls
    expect(setTimeoutCalls.length).to.equal(1)

    const { args } = setTimeoutCalls[0]
    expect(typeof args[0]).to.equal('function')
    expect(args[1]).to.equal(50)
  })

  test('shared internals are called as expected', async () => {
    await pWaitMs(0)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [0, 'ms', 'number', 'pWaitMs'],
    ])
  })
})
