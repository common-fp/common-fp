import fsp from 'node:fs/promises'
import { fromRoot } from '../utils/index.mjs'

const validateLocalFiles = async () => {
  try {
    await fsp.readFile(fromRoot('app/config.js', 'utf8'))
    return true
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('app/config.js missing')
      return false
    } else {
      throw err
    }
  }
}

export default validateLocalFiles
