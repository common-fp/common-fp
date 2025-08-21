import * as ct from './common-types.mjs'

const validateObjectKeys = (keys, utilName) => {
  for (const k of keys) {
    if (!ct.objectKey.has(typeof k)) {
      let msg = `when calling ${utilName} with an object, 'keys' must all be typeof string or number`
      msg += `\n  invalid key type found: ${typeof k}`
      throw new Error(msg)
    }
  }
}

export default validateObjectKeys
