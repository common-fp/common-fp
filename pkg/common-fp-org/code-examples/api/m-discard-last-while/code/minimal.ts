const gt2 = (n: number) => n > 2
const mDiscardLastWhileGt2 = mDiscardLastWhile(gt2)

const arr = [1, 2, 3, 4]
const mutatedArr = mDiscardLastWhileGt2(arr)
console.log(mutatedArr === arr) // is true
console.log(arr) // is [1, 2]
