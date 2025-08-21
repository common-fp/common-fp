const returnArgs = (...args) => args

const returnSwappedArgs = swapFirstTwoArgs(returnArgs)

const result = returnSwappedArgs('a', 'b', 'c')
console.log(result)
/// is [
///   b
///   a
///   c
/// ]
