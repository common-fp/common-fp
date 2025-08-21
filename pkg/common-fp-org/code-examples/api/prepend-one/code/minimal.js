const prependA = prependOne('a')
prependA(['b', 'c']) // is ['a', 'b', 'c']

const prependArrayA = prependOne(['a'])
prependArrayA(['b', 'c']) // is [['a'], 'b', 'c']
