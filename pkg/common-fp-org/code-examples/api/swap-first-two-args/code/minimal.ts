const returnArgs = (a1: string, a2: number, a3: boolean) => [a1, a2, a3]

const returnSwappedArgs = swapFirstTwoArgs(returnArgs)

const result = returnSwappedArgs(1, 'a', true)
console.log(result)
/// is [
///   a
///   1
///   true
/// ]
