const obj = { a: 1, b: 2, c: 3 }
const inc = (n: number) => n + 1
const dec = (n: number) => n - 1
const updateAandC = update({ a: inc, c: dec })

const updatedObj = updateAandC(obj)
console.log(updatedObj)
/// is {
///   a: 2
///   b: 2
///   c: 2
/// }
