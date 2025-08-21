export default fn => {
  function mockFn(...args) {
    mockFn.argsPerCall.push(args)

    let result
    if (mockFn.resultPerCall.length) result = mockFn.resultPerCall.shift()
    else if (Object.hasOwn(mockFn, 'return')) result = mockFn.return
    else result = fn.apply(this, args)

    const lastCall = { args, result }
    mockFn.calls.push(lastCall)
    mockFn.lastCall = lastCall

    return result
  }

  const reset = () => {
    Object.assign(mockFn, {
      argsPerCall: [],
      calls: [],
      resultPerCall: [],
    })
    delete mockFn.return
    delete mockFn.lastCall
  }

  return Object.assign(mockFn, {
    argsPerCall: [],
    calls: [],
    isMockFn: true,
    reset,
    resultPerCall: [],
  })
}
