const gt2 = async n => n > 2
const discardWhenGt2 = pDiscardWhen(gt2)

const arr = [4, 1, 3, 2]
await discardWhenGt2(arr) // is [1, 2]

const obj = { d: 4, a: 1, c: 3, b: 2 }
await discardWhenGt2(obj) // is { a: 1, b: 2 }
