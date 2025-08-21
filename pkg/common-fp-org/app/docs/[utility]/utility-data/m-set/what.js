import code from '@/built/code-examples/api/m-set'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Set a property</p>
      <MutableNote argName="anything" utilityName="set" />
    </>
  ),
}

export default what
