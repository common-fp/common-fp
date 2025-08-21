import { replace } from 'fibble'
import { spy } from '@common-fp/test-utils'
import './type-detect.mjs'

const getType = (await import('#src/get-type')).default

const pathToModule = '../../src/get-type.mjs'

const getTypeSpy = spy(getType)
await replace(pathToModule, { default: getTypeSpy })

export default getTypeSpy
