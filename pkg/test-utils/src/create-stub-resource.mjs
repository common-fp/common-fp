import createMockFn from './create-mock-fn.mjs'

const createStubResource = (obj, methodName) => {
  let stubbedFn
  const origDescriptor = Object.getOwnPropertyDescriptor(obj, methodName)

  return Object.create(null, {
    stub: {
      enumberable: true,
      get: () => stubbedFn,
    },
    setup: {
      enumerable: true,
      value: () => {
        stubbedFn = createMockFn(origDescriptor.value)
        Object.defineProperty(obj, methodName, { value: stubbedFn })
      },
    },
    teardown: {
      enumerable: true,
      value: () => {
        if (!stubbedFn) return

        Object.defineProperty(obj, methodName, origDescriptor)
        for (const k of Object.keys(stubbedFn)) {
          delete stubbedFn[k]
        }
        stubbedFn = undefined
      },
    },
  })
}

export default createStubResource
