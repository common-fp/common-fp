const obj = { a: 1, b: 2, c: 3 }
const inc = n => n + 1
const dec = n => n - 1
const updateAandC = mUpdate({ a: inc, c: dec })

const mutatedObj = updateAandC(obj)
console.log(mutatedObj === obj) // is true
console.log(obj)
/// is {
///   a: 2
///   b: 2
///   c: 2
/// }
