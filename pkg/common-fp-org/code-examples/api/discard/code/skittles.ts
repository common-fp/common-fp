const handful = ['green', 'orange', 'red', 'yellow', 'purple', 'green']

const discardGreenAndYellow = discard(['green', 'yellow'])<string[]>
const goodSkittles = discardGreenAndYellow(handful)
console.log(goodSkittles)
// is ['orange', 'red', 'purple']
