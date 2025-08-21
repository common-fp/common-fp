const findKeyWhereValGt1 = findKey((val: number) => val > 1)

findKeyWhereValGt1([0, 1, 2]) // is 2
findKeyWhereValGt1([1, 2, 3]) // is 1
findKeyWhereValGt1([0, 1]) // is undefined

findKeyWhereValGt1({ a: 1, b: 2 }) // is 'b'
