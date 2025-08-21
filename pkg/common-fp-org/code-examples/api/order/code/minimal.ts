const arr = [3, 1, 2]

const ascending = (left: number, right: number) => left - right
const orderByAscending = order(ascending)
const orderedArr = orderByAscending(arr)

console.log(orderedArr) // is [1, 2, 3]
