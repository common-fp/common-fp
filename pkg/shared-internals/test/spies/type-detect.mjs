import { replace } from 'fibble'
import { spy } from '@common-fp/test-utils'

const typeDetect = (await import('#src/deps/type-detect')).default
const pathToModule = '../../src/deps/type-detect.mjs'

const typeDetectSpy = spy(typeDetect)
await replace(pathToModule, { default: typeDetectSpy })

export default typeDetectSpy
