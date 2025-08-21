const truncateTo3Lines = truncateToNLines(3)

const lf = '\n'
const crlf = '\r\n'

const notTruncated = truncateTo3Lines(` a${crlf} b${lf} c`)
console.log(notTruncated)
/// is
///  a
///  b
///  c

const isTruncated = truncateTo3Lines(` a${crlf} b${lf} c${crlf} d`)
console.log('\n', isTruncated)
/// is
///  a
///  b
///  c
/// ...
