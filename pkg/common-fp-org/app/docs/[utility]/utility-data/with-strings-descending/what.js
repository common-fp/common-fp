import code from '@/built/code-examples/api/with-strings-descending'
import CompareFunction from '@/docs/[utility]/cmpt/compare-function'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        A <CompareFunction /> which orders strings reverse-alphabetically.
      </p>
      <p>Ordering is case-sensitive</p>
    </>
  ),
}

export default what
