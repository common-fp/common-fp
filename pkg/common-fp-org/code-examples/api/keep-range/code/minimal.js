const range = { startIdx: 1, endIdx: 2 }
const keep2ndAnd3rd = keepRange(range)

keep2ndAnd3rd(['a', 'b', 'c', 'd']) // is ['b', 'c']
keep2ndAnd3rd('abcd') // is 'bc'
keep2ndAnd3rd(['a', 'b']) // is ['b']
