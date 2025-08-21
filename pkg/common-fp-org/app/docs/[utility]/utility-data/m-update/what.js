import code from '@/built/code-examples/api/m-update'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Update matching entries via mapper functions</p>
      <MutableNote argName="collection" utilityName="update" />
    </>
  ),
}

export default what
