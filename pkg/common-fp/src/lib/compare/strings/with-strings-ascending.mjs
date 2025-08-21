const withStringsAscending = (left, right) =>
  left.localeCompare(right, undefined, { sensitivity: 'case' })

export default withStringsAscending
