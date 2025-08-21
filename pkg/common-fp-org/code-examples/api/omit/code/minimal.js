const obj = { a: 1, b: 2, c: 3, d: 4 }
const omitAC = omit(['a', 'c'])

omitAC(obj) // is { b: 2, d: 4 }
