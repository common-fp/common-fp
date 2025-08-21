import code from '@/built/code-examples/api/negate'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Negate a predicate</p>
      <p>
        For example, if you pass a function that always returns true, then
        negate gives you a function returning false.
      </p>
    </>
  ),
}

export default what
