const toCommaList = joinValues(', ')

toCommaList(['A', 'B']) // is A, B
toCommaList({ a: 'A', b: 'B' }) // is A, B
