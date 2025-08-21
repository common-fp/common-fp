const csv = `low,high,precipitation%
72,84,0
70,85,15
62,74,40`

const conveyLowToHigh = replaceFirstMatch(',', ' <--> ')
const updateCSV = compose([
  split('\n'),
  mapValues(conveyLowToHigh),
  joinValues('\n'),
])
const updatedCSV = updateCSV(csv)
console.log(updatedCSV)
/// prints
/// low <--> high,precipitation%
/// 72 <--> 84,0
/// 70 <--> 85,15
/// 62 <--> 74,40
