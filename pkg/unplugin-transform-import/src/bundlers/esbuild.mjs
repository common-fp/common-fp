import { createEsbuildPlugin } from 'unplugin'
import makePlugin from '../make-plugin.mjs'

export default createEsbuildPlugin(makePlugin)
