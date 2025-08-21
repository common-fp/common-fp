import typeDetect from './deps/type-detect.mjs'

const getType = anything => typeDetect(anything).toLowerCase()

export default getType
