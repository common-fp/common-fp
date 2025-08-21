const lt3 = (n: number) => n < 3
const mDiscardFirstWhileLt3 = mDiscardFirstWhile(lt3)

const arr = [1, 2, 3, 4]
const mutatedArr = mDiscardFirstWhileLt3(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [3, 4]
