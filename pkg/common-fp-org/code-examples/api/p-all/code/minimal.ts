const gt2 = async (n: number) => n > 2
const allGt2 = pAll(gt2)

await allGt2([2, 3]) // is false
await allGt2([3, 4]) // is true
await allGt2({ b: 2, c: 3 }) // is false
await allGt2({ c: 3, d: 4 }) // is true
