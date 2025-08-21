const gt2 = n => n > 2
const discardLastWhileGt2 = discardLastWhile(gt2)

discardLastWhileGt2([1, 2, 3, 4]) // is [1, 2]
discardLastWhileGt2([3, 4, 1]) // is [3, 4, 1]
