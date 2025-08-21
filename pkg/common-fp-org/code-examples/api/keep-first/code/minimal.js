const keepFirstThree = keepFirst(3)

keepFirstThree(['a', 'b', 'c', 'd']) // is ['a', 'b', 'c']
keepFirstThree('abcd') // is 'abc'
keepFirstThree(['a']) // is ['a']
