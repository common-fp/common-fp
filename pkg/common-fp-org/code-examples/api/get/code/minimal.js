const getA = get('a')
getA({ a: 'b' }) // is 'b'
getA({}) // is undefined

const getFirst = get(0)
getFirst(['a']) // is 'a'
