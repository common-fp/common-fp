const increment = async (n: number) => n + 1
const double = async (n: number) => n * 2
const toAnswer = async (n: number) => 'answer: ' + n

const calculate = pCompose([increment, double, toAnswer])
await calculate(1) // is 'answer: 4'

const returnFirstArg = pCompose([])
await returnFirstArg('a', 'b') // is 'a'
