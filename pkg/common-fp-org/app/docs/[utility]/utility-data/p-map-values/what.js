import code from '@/built/code-examples/api/p-map-values'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Asynchronously map the values of a collection.</p>
      <p className="note">
        The mapper function is called for all entries at once. See Notes for an
        example.
      </p>
    </>
  ),
}

export default what
