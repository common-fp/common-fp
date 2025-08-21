const increment = async n => n + 1
const double = async n => n * 2
const toAnswer = async n => 'answer: ' + n

const calculate = pCompose([increment, double, toAnswer])
await calculate(1) // is 'answer: 4'

const returnFirstArg = pCompose([])
await returnFirstArg('a', 'b') // is 'a'
