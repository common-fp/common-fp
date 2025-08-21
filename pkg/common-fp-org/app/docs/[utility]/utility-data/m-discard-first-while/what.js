import code from '@/built/code-examples/api/m-discard-first-while'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Discard the first elements that pass a condition</p>
      <MutableNote argName="anArray" utilityName="discardFirstWhile" />
    </>
  ),
}

export default what
