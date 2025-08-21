const obj = { a: 'b' }
const setAToC = set('a', 'c')
setAToC(obj) // is { a: 'c' }

const arr = ['a', '_', 'c']
const setIdx1ToB = set(1, 'b')
setIdx1ToB(arr) // is ['a', 'b', 'c']
