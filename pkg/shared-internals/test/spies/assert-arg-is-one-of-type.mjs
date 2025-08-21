import { replace } from 'fibble'
import { spy } from '@common-fp/test-utils'
import './get-type.mjs'

const assertArgIsOneOfType = (await import('#src/assert-arg-is-one-of-type'))
  .default

const pathToModule = '../../src/assert-arg-is-one-of-type.mjs'

const assertArgIsOneOfTypeSpy = spy(assertArgIsOneOfType)
await replace(pathToModule, { default: assertArgIsOneOfTypeSpy })

export default assertArgIsOneOfTypeSpy
