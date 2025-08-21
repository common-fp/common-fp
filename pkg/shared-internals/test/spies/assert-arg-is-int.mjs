import { replace } from 'fibble'
import { spy } from '@common-fp/test-utils'
import './get-type.mjs'

const assertArgIsInt = (await import('#src/assert-arg-is-int')).default

const pathToModule = '../../src/assert-arg-is-int.mjs'

const assertArgIsIntSpy = spy(assertArgIsInt)
await replace(pathToModule, { default: assertArgIsIntSpy })

export default assertArgIsIntSpy
