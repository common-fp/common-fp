const splitCommas = split(',')
splitCommas('a,b,c') // is ['a', 'b', 'c']

const splitPhoneNumber = split(/[.-]/)
splitPhoneNumber('555.123.4567')
// is ['555', '123', '4567']

splitPhoneNumber('555-123-4567')
// is ['555', '123', '4567']
