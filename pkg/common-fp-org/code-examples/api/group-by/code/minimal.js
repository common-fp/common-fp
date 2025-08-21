const groupByFloor = groupBy(Math.floor)
const result = groupByFloor([1.2, 2.7, 1.8])
console.log(result)
/// is {
///   1: [1.2, 1.8]
///   2: [2.7]
/// }
