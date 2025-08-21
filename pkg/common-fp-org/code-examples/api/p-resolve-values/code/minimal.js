const a = Promise.resolve('a')
const b = Promise.resolve('b')

await pResolveValues({ a, b })
// is { a: 'a', b: 'b' }

await pResolveValues([a, b])
// is ['a', 'b']
