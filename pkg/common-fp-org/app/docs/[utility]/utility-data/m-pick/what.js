import code from '@/built/code-examples/api/m-pick'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Pick entries from a collection by key</p>
      <MutableNote argName="collection" utilityName="pick" />
    </>
  ),
}

export default what
