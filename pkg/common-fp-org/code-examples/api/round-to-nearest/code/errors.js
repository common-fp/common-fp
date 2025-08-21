try {
  roundToNearest('2')
} catch (err) {
  show(err)
  /// prints
  // Without a decimal, roundToNearest requires a precision passing the regex /^10{0,9}$/
}

try {
  roundToNearest('0.2')
} catch (err) {
  show('\n', err)
  /// prints
  // With a decimal, roundToNearest requires a precision passing the regex /^0\.0{0,9}1$/
}
