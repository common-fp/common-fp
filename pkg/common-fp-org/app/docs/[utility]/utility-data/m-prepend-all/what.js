import code from '@/built/code-examples/api/m-prepend-all'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Prepend the contents of one array ahead of another</p>
      <MutableNote argName="base" utilityName="prependAll" />
    </>
  ),
}

export default what
