const prepend12 = prependAll([1, 2])
prepend12([3, 4]) // is [1, 2, 3, 4]

const prepend1AndArray2 = prependAll([1, [2]])
prepend1AndArray2([3, 4]) // is [1, [2], 3, 4]
