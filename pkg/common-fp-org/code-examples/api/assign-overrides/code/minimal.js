const ab = { a: 1, b: 2 }
const assignABOverrides = assignOverrides(ab)
const abc = assignABOverrides({ a: 2, c: 3 })
console.log(abc)
/// is {
///   a: 1,
///   b: 2,
///   c: 3
/// }
