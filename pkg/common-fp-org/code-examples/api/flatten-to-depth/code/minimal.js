const flattenTwice = flattenToDepth(2)
flattenTwice(['a', ['b', ['c', ['d']]]]) // is ['a', 'b', 'c', ['d']]
