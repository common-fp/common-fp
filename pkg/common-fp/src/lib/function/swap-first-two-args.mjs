const swapFirstTwoArgs =
  fn =>
  (...args) => {
    if (!args.length) return fn()

    // don't change the number of arguments passed to the function, just
    // pass undefined
    if (args.length === 1) return fn(undefined)

    return args.length === 2 ?
        fn(args[1], args[0])
      : fn(args[1], args[0], ...args.slice(2))
  }

export default swapFirstTwoArgs
