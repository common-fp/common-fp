const splitEvery2 = splitEvery(2)

splitEvery2('abc') // is ['ab', 'c']
splitEvery2(['a', 'b', 'c']) // is [['a', 'b'], ['c']]

splitEvery2('') // is ['']
splitEvery2([]) // is [[]]
