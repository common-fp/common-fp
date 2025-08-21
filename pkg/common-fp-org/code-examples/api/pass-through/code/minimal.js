const increment = n => n + 1
const double = n => n * 2
const toAnswer = n => 'answer: ' + n

passThrough(1, [increment, double, toAnswer])
// is 'answer: 4'

passThrough('a', [])
// is 'a'
