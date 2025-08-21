const mapTo = (fn, obj) => {
  const result = {}
  for (const k of Object.keys(obj)) {
    result[k] = fn(obj[k])
  }
  return result
}

export default mapTo
