const gt1 = n => n > 1
const findGt1 = find(gt1)

findGt1([1, 2, 3]) // is 2
findGt1([0, 1]) // is undefined
findGt1({ a: 1, b: 2, c: 3 }) // is 2
