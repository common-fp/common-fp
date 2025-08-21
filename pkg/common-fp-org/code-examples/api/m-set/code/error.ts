const setAToC = mSet('a', 'c')
const obj = {}
Object.defineProperty(obj, 'a', {
  enumerable: true,
  writable: false,
  value: 'b',
})
try {
  setAToC(obj)
} catch (err) {
  console.log(err)
  /// prints
  // 'mSet requires key to be assignable.  See error properties for more info.'
}
