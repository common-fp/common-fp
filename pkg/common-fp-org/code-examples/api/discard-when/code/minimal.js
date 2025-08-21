const gt2 = n => n > 2
const discardWhenGt2 = discardWhen(gt2)

const resultArr = discardWhenGt2([4, 1, 3, 2])
console.log(resultArr)
// is [1, 2]

const resultObj = discardWhenGt2({
  d: 4,
  a: 1,
  c: 3,
  b: 2,
})
console.log(resultObj)
// is { a: 1, b: 2 }
