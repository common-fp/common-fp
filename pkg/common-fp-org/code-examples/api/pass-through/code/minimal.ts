const increment = (n: number) => n + 1
const double = (n: number) => n * 2
const toAnswer = (n: number) => 'answer: ' + n

passThrough(1, [increment, double, toAnswer])
// is 'answer: 4'

passThrough('a', [])
// is 'a'
