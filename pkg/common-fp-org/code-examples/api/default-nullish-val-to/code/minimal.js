const defaultToNegativeOne = defaultNullishValTo(-1)

defaultToNegativeOne(1) // is 1
defaultToNegativeOne(0) // is 0
defaultToNegativeOne(undefined) // is -1
