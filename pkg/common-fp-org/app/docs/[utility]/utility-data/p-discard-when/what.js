import code from '@/built/code-examples/api/p-discard-when'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Discard entries that pass an asynchronous condition.</p>
      <p className="note">
        The predicate is called for all entries at once. See Notes for an
        example.
      </p>
    </>
  ),
}

export default what
