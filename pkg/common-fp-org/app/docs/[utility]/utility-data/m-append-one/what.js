import code from '@/built/code-examples/api/m-append-one'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Push a value onto an array</p>
      <MutableNote argName="anArray" utilityName="appendOne" />
    </>
  ),
}

export default what
