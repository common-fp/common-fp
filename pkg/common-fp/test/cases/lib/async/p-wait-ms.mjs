import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import pWaitMs from '#lib/async/p-wait-ms'

suite('p-wait-ms', () => {
  test('waits ms', async () => {
    const start = new Date()
    const ms = 50
    await pWaitMs(ms)
    expect(Date.now() - start).to.be.closeTo(ms, 10)
  })

  test('shared internals are called as expected', async () => {
    await pWaitMs(0)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [0, 'ms', 'number', 'pWaitMs'],
    ])
  })
})
