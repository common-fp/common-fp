const keepLastThree = keepLast(3)

keepLastThree(['a', 'b', 'c', 'd']) // is ['b', 'c', 'd']
keepLastThree('abcd') // is 'bcd'
keepLastThree(['a']) // is ['a']
