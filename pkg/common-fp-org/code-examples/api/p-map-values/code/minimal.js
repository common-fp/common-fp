const inc = async n => n + 1
const incAll = pMapValues(inc)

await incAll([1, 2, 3]) // is [2, 3, 4]
