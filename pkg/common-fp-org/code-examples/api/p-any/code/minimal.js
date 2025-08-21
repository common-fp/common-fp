const gt2 = async n => n > 2
const anyGt2 = pAny(gt2)

await anyGt2([1, 2]) // is false
await anyGt2([1, 2, 3]) // is true
await anyGt2({ a: 1, b: 2 }) // is false
await anyGt2({ a: 1, b: 2, c: 3 }) // is true
