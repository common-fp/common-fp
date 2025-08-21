const lt3 = (n: number) => n < 3
const findLastLt3 = findLast(lt3)

findLastLt3([1, 2, 3]) // is 2
findLastLt3([3, 4, 5]) // is undefined
