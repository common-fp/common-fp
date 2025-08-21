const lt3 = (n: number) => n < 3
const findLastKeyLt3 = findLastKey(lt3)

findLastKeyLt3([1, 2, 3]) // is 1
findLastKeyLt3([3, 4, 5]) // is undefined
