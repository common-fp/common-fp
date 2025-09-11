import handler from './handler.mjs'
import { name, isNodeModulesRe, isSupportedExtRe } from './utils.mjs'

const makePlugin = () => ({
  name,
  transform: {
    filter: {
      id: {
        include: isSupportedExtRe,
        exclude: isNodeModulesRe,
      },
    },
    handler,
  },
})

export default makePlugin
