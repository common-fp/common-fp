const negate =
  fn =>
  (...args) =>
    !fn(...args)

export default negate
