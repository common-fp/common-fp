const zeroOutRange = fillRangeWith(0, { startIdx: 1, endIdx: 2 })

zeroOutRange([1, 2, 3, 4]) // is [1, 0, 0, 4]
zeroOutRange([1, 2]) // is [1, 0]
zeroOutRange([]) // is []
