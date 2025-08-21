const withStringsDescending = (left, right) =>
  right.localeCompare(left, undefined, { sensitivity: 'case' })

export default withStringsDescending
