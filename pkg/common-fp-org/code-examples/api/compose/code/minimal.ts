const increment = (n: number) => n + 1
const double = (n: number) => n * 2
const toAnswer = (n: number) => 'answer: ' + n

const calculate = compose([increment, double, toAnswer])

calculate(1) // is 'answer: 4'

const returnFirstArg = compose([])
returnFirstArg('a', 'b') // is 'a'
