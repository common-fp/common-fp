import code from '@/built/code-examples/api/m-discard-last-while'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Discard the last elements that pass a condition</p>
      <MutableNote argName="anArray" utilityName="discardLastWhile" />
    </>
  ),
}

export default what
