import code from '@/built/code-examples/api/p-for-each'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Call an async function for each entry.</p>
      <p className="note">
        The function is called for all entries at once. See Notes for an
        example.
      </p>
    </>
  ),
}

export default what
