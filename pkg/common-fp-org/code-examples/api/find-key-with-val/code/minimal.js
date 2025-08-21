const findKeyOf2 = findKeyWithVal(2)
const findKeyOfB = findKeyWithVal('b')

findKeyOf2([1, 2, 3]) // is 1
findKeyOf2([1, 2, 3, 2]) // is 1
findKeyOf2([1, 3, 4]) // is undefined

findKeyOf2({ a: 1, b: 2 }) // is 'b'
findKeyOfB('ab') // is 1
