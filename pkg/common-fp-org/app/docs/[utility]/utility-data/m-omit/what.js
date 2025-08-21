import code from '@/built/code-examples/api/m-omit'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Remove entries from a collection by key</p>
      <MutableNote argName="collection" utilityName="omit" />
    </>
  ),
}

export default what
