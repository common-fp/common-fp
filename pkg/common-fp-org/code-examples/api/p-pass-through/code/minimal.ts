const increment = async (n: number) => n + 1
const double = async (n: number) => n * 2
const toAnswer = async (n: number) => 'answer: ' + n

const result1 = await pPassThrough(1, [increment, double, toAnswer])
console.log(result1) // is 'answer: 4'

const result2 = await pPassThrough(1, [])
console.log(result2) // is 1
