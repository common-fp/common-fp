const expandTo3 = expand(3, '-')
const expandTo5 = expand(5, '-')

expandTo3('ab') // is 'ab-'
expandTo3('abc') // is 'abc'

expandTo5('ab') // is '-ab--'
expandTo5('abc') // is '-abc-'
