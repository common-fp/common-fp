const increment = n => n + 1
const double = n => n * 2
const toAnswer = n => 'answer: ' + n

const logNum = n => console.log('n: ' + n)

const result = passThrough(1, [increment, peek(logNum), double, toAnswer])

console.log(result)
/// prints
/// n: 2
/// answer: 4
