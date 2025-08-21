const obj = { a: { b: 'c' } }
const getValueAtB = getAtPath(['a', 'b'])
getValueAtB(obj) // is 'c'
getValueAtB({}) // is undefined

const arr = [{ a: 'b' }]
const getValueAtA = getAtPath([0, 'a'])
getValueAtA(arr) // is 'b'
