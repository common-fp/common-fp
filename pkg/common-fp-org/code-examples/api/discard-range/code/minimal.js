const range = { startIdx: 1, endIdx: 2 }
const discard2ndAnd3rd = discardRange(range)

discard2ndAnd3rd(['a', 'b', 'c', 'd']) // is ['a', 'd']
discard2ndAnd3rd('abcd') // is 'ad'
discard2ndAnd3rd(['a', 'b']) // is ['a']
