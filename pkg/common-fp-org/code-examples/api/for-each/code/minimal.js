const logEntry = (val, key) => console.log(`${key}: ${val}`)
const logEach = forEach(logEntry)
logEach([1, 2, 3])
/// is
/// 0: 1
/// 1: 2
/// 2: 3

logEach({ a: 1, b: 2, c: 3 })
/// is
/// a: 1
/// b: 2
/// c: 3
