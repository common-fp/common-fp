const gt2 = async n => n > 2
const findGt2 = pFind(gt2)

await findGt2([1, 2, 3]) // is 3
await findGt2([1, 2]) // is undefined
