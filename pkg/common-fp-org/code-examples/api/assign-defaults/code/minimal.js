const ab = { a: 1, b: 2 }
const assignABDefaults = assignDefaults(ab)
const abc = assignABDefaults({ a: 2, c: 3 })
console.log(abc) // is { a: 2, b: 2, c: 3 }
