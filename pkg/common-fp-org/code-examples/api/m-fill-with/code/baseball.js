const display = {
  strikes: 2,
  balls: 1,
  outs: 2,
}

const endFrame = mFillWith(0)
endFrame(display)
console.log(display)
/// is {
///   strikes: 0
///   balls: 0
///   outs: 0
/// }
