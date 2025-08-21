const arr = [3, 1, 2]

const ascending = (left: number, right: number) => left - right
const orderByAscending = mOrder(ascending)
const mutatedArr = orderByAscending(arr)

console.log(mutatedArr === arr) // is true
console.log(arr) // is [1, 2, 3]
