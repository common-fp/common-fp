const gt2 = n => n > 2
const mKeepLastWhileLt3 = mKeepLastWhile(gt2)

const arr = [1, 2, 3, 4]
const mutatedArr = mKeepLastWhileLt3(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [3, 4]
