try {
  transpose([
    ['a', 'b'],
    [1, 2, 3],
  ])
} catch (err) {
  console.log(err)
  /// prints
  // transpose requires 'anArray' to contain arrays of equal length
}
