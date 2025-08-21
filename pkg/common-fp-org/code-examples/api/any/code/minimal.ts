const gt2 = (n: number) => n > 2
const anyGt2 = any(gt2)

anyGt2([1, 2]) // is false
anyGt2([1, 2, 3]) // is true
anyGt2({ a: 1, b: 2 }) // is false
anyGt2({ a: 1, b: 2, c: 3 }) // is true
