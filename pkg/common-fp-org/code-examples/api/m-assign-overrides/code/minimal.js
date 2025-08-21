const ab = { a: 1, b: 2 }
const assignOverridesAB = mAssignOverrides(ab)
const obj = { a: 2, c: 3 }
const mutatedObj = assignOverridesAB(obj)

console.log(mutatedObj === obj) // is true
console.log(obj) // is { a: 1, c: 3, b: 2 }
