const scream = someString => someString.toUpperCase()
const screamAll = mapValues(scream)
///                          ^
///                    first argument

const words = ['hey', 'yo']
const screamedWords = screamAll(words)
///                              ^
///                        last argument
console.log(screamedWords)
