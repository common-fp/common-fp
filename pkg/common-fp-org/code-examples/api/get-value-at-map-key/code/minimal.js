const aMap = new Map([
  ['a', 1],
  ['b', 2],
])
const getA = getValueAtMapKey('a')
getA(aMap) // is 1

const emptyMap = new Map()
getA(emptyMap) // is undefined
