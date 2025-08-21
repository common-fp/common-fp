import { replace } from 'fibble'
import { spy } from '@common-fp/test-utils'
import './get-type.mjs'

const assertArgIsType = (await import('#src/assert-arg-is-type')).default
const pathToModule = '../../src/assert-arg-is-type.mjs'

const assertArgIsTypeSpy = spy(assertArgIsType)
await replace(pathToModule, { default: assertArgIsTypeSpy })

export default assertArgIsTypeSpy
