import createMockFn from './create-mock-fn.mjs'

const returnUndefined = () => undefined

const spy = (fn = returnUndefined) => {
  const mockFn = createMockFn(fn)
  mockFn.setup = mockFn.reset
  mockFn.teardown = mockFn.reset

  return mockFn
}

export default spy
