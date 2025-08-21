const append34 = appendAll([3, 4])
append34([1, 2]) // is [1, 2, 3, 4]

const append3AndArray4 = appendAll([3, [4]])
append3AndArray4([1, 2]) // is [1, 2, 3, [4]]
