import { replace } from 'fibble'
import { spy } from '@common-fp/test-utils'
import getAtPath from '#internal/get-at-path'

const pathToModule = '../../src/internal/get-at-path.mjs'

const getAtPathSpy = spy(getAtPath)
await replace(pathToModule, { default: getAtPathSpy })

export default getAtPathSpy
