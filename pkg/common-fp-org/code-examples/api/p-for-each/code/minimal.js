const log = async n => console.log('n: ' + n)
const logAll = pForEach(log)

await logAll([1, 2, 3])
/// prints
/// n: 1
/// n: 2
/// n: 3
