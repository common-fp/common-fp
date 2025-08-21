const gt2 = async n => n > 2
const keepWhenGt2 = pKeepWhen(gt2)

const arr = [4, 1, 3, 2]
await keepWhenGt2(arr) // is [4, 3]

const obj = { d: 4, a: 1, c: 3, b: 2 }
await keepWhenGt2(obj) // is { d: 4, c: 3 }
