const handful = ['green', 'orange', 'red', 'yellow', 'purple', 'green']

const discardGreenAndYellow = discard(['green', 'yellow'])
const goodSkittles = discardGreenAndYellow(handful)
console.log(goodSkittles)
// is ['orange', 'red', 'purple']
