import handler from '../handler.mjs'
import { isNodeModulesRe, isSupportedExtRe, name } from '../utils.mjs'

const importTransformPlugin = () => ({
  name,
  transform: (code, id) => {
    if (isNodeModulesRe.test(id) || !isSupportedExtRe.test(id)) return

    return handler(code, id)
  },
})

export default importTransformPlugin
