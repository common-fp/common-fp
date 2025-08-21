const gt2 = n => n > 2
const keepWhenGt2 = keepWhen(gt2)

const result1 = keepWhenGt2([1, 2, 3, 4]) // is [3, 4]
console.log(result1)

const result2 = keepWhenGt2({ a: 1, b: 2, c: 3, d: 4 })
console.log(result2)
// is { c: 3, d: 4 }
