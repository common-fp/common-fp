const obj = {
  a: {
    b: 'c',
  },
}
const setBToD = mSetAtPath(['a', 'b'], 'd')
const mutatedObj = setBToD(obj)

console.log(mutatedObj === obj) // is true
console.log(obj)
/// is {
///   a: {
///     b: 'd'
///   }
/// }
