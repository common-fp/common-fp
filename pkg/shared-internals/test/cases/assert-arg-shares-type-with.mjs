import { expect } from 'chai'
import assertArgSharesTypeWith from '#src/assert-arg-shares-type-with'

suite('assert-arg-shares-type-with', () => {
  test('success', () => {
    const argType = 'string'
    const argName = 'someArg'
    const sharedArgName = 'someSharedArg'
    const sharedArgType = 'string'
    const utilName = 'utilName'
    expect(() =>
      assertArgSharesTypeWith({
        argName,
        argType,
        sharedArgName,
        sharedArgType,
        utilName,
      })
    ).to.not.throw()
  })

  test('error', () => {
    const argName = 'someString'
    const argType = 'number'
    const sharedArgName = 'someSharedArg'
    const sharedArgType = 'string'
    const utilName = 'utilName'

    const errMsg =
      `${utilName} requires the '${argName}' type to match '${sharedArgName}'.\n` +
      `  ${sharedArgName} has type ${sharedArgType}\n` +
      `  ${argName} has type ${argType}`

    expect(() =>
      assertArgSharesTypeWith({
        argName,
        argType,
        sharedArgName,
        sharedArgType,
        utilName,
      })
    ).to.throw(errMsg)
  })
})
