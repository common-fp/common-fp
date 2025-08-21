/**
 * a simple function taking either an array or set of expected types and
 * returning whether it contains a specific type
 */
const containsType = (expected, type) => {
  return expected.includes ? expected.includes(type) : expected.has(type)
}

export default containsType
