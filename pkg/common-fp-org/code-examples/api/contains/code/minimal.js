const containsC = contains('c')

containsC('abc') // is true
containsC('ab') // is false
containsC(['a', 'b', 'c']) // is true
containsC(['a', 'b', 'cd']) // is false
