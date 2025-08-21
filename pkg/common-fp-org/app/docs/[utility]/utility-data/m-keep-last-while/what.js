import code from '@/built/code-examples/api/m-keep-last-while'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Keep the last elements that pass a condition</p>
      <MutableNote argName="anArray" utilityName="keepLastWhile" />
    </>
  ),
}

export default what
