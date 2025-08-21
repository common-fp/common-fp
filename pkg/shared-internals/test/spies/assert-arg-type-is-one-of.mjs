import { replace } from 'fibble'
import { spy } from '@common-fp/test-utils'

const assertArgTypeIsOneOf = (await import('#src/assert-arg-type-is-one-of'))
  .default

const pathToModule = '../../src/assert-arg-type-is-one-of.mjs'

const assertArgTypeIsOneOfSpy = spy(assertArgTypeIsOneOf)
await replace(pathToModule, { default: assertArgTypeIsOneOfSpy })

export default assertArgTypeIsOneOfSpy
