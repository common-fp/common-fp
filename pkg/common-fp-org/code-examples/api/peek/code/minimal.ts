const increment = (n: number) => n + 1
const double = (n: number) => n * 2
const toAnswer = (n: number) => 'answer: ' + n

const logNum = (n: number) => console.log('n: ' + n)

const result = passThrough(1, [increment, peek(logNum), double, toAnswer])

console.log(result)
/// prints
/// n: 2
/// answer: 4
