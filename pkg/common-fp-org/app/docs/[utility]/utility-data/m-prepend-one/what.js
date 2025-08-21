import code from '@/built/code-examples/api/m-prepend-one'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Prepend a value to an array</p>
      <MutableNote argName="anArray" utilityName="prependOne" />
    </>
  ),
}

export default what
