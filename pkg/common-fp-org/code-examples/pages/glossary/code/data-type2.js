const scream = someString => someString.toUpperCase()
const words = ['hey', 'yo']

const screamedWords = mapValues(scream)(words)
///                              ^       ^
///                            first    last
console.log(screamedWords)
