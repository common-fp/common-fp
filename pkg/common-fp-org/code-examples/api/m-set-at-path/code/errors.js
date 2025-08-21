try {
  mSetAtPath([], 'path cannot be empty')
} catch (err) {
  console.log(err)
  /// prints
  // mSetAtPath requries 'path' to be a non-empty array
}

const setBToD = mSetAtPath(['a', 'b'], 'd')

try {
  const noA = {}
  setBToD(noA)
} catch (err) {
  console.log('\n', err)
  /// prints
  // mSetAtPath requires path to exist on 'anything'.  Arguments are assigned to this error to aid in debugging.
}

try {
  const bIsUnassignable = { a: "can't assign a property to primitive" }
  setBToD(bIsUnassignable)
} catch (err) {
  console.log('\n', err)
  /// prints
  // mSetAtPath requires the property at path to be assignable.  See error properties for more info.
}
