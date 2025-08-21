invert({ a: 1, b: 2 }) // is { 1: 'a', 2: 'b' }

const aMap = new Map([
  ['a', 1],
  ['b', 2],
])
invert(aMap) // is a new Map [[1, 'a'], [2, 'b']]
