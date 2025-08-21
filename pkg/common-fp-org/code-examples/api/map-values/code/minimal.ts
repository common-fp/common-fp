const arr = [1, 2, 3]

const inc = (n: number) => n + 1
const incAll = mapValues(inc)
incAll(arr) // is [2, 3, 4]
