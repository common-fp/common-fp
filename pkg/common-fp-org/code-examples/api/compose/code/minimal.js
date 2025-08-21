const increment = n => n + 1
const double = n => n * 2
const toAnswer = n => 'answer: ' + n

const calculate = compose([increment, double, toAnswer])

calculate(1) // is 'answer: 4'

const returnFirstArg = compose([])
returnFirstArg('a', 'b') // is 'a'
