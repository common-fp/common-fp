const setAToC = mSet('a', 'c')
try {
  setAToC(1)
} catch (err) {
  console.log(err)
  /// prints
  // 'mSet requires key to be assignable.  See error properties for more info.'
}
