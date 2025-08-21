import code from '@/built/code-examples/api/m-discard-range'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'
import RangeNote from '@/docs/[utility]/cmpt/range-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Discard a range of elements</p>
      <RangeNote />
      <MutableNote argName="anArray" utilityName="discardRange" />
    </>
  ),
}

export default what
