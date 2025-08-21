const lt3 = (n: number) => n < 3
const mKeepFirstWhileLt3 = mKeepFirstWhile(lt3)

const arr = [1, 2, 3, 4]
const mutatedArr = mKeepFirstWhileLt3(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [1, 2]
