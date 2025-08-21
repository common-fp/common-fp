const obj = { a: 1, b: 2, c: 3, d: 4 }
const pickAC = pick(['a', 'c'])

pickAC(obj) // is { a: 1, c: 3 }
