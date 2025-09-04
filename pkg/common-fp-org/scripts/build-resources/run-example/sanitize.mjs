const sanitize = something => {
  const duplicateObjects = new Map()

  return sanitizeRec(something)

  function sanitizeRec(val, key) {
    if (!val) return val

    const buildNextKey = iteratedKey => {
      return key ? `${key}.${iteratedKey}` : iteratedKey
    }

    if (duplicateObjects.has(val)) {
      return `<reference to '${duplicateObjects.get(val)}'>`
    }

    if (val !== null && ['function', 'object'].includes(typeof val)) {
      duplicateObjects.set(val, key)
    }

    if (typeof val === 'function') {
      return val.name ? `<function ${val.name}>` : '<function>'
    } else if (Array.isArray(val)) {
      return val.map((v, i) => sanitizeRec(v, buildNextKey(`[${i}]`)))
    } else if (val instanceof Map) {
      const sanitizedEntries = [...val.entries()].map(([k, v], idx) => [
        sanitizeRec(k, buildNextKey(`Map key ${idx}`)),
        sanitizeRec(v, buildNextKey(`Map val ${idx}`)),
      ])
      return new Map(sanitizedEntries)
    } else if (val instanceof Set) {
      return new Set(
        [...val].map((v, i) => sanitizeRec(v, buildNextKey(`Set val ${i}`)))
      )
    } else if (val instanceof Error) {
      return val.message
    } else if (val instanceof Date) {
      const MM = `${val.getMonth() + 1}`.padStart(2, '0')
      const dd = `${val.getDate()}`.padStart(2, '0')
      const yyyy = val.getFullYear()
      return `${yyyy} ${MM} ${dd}`
    } else if (typeof val === 'object') {
      const sanitizedObj = {}
      for (const [k, v] of Object.entries(val)) {
        sanitizedObj[k] = sanitizeRec(v, buildNextKey(k))
      }
      return sanitizedObj
    }
    return val
  }
}

export default sanitize
