const gt2 = (n: number) => n > 2
const discardLastWhileGt2 = discardLastWhile(gt2)<number[]>

discardLastWhileGt2([1, 2, 3, 4]) // is [1, 2]
discardLastWhileGt2([3, 4, 1]) // is [3, 4, 1]
