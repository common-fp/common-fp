const gt2 = (n: number) => n > 2
const lte2 = negate(gt2)

gt2(2) // is false
lte2(2) // is true
