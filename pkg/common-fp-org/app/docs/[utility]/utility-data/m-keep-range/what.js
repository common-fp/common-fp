import code from '@/built/code-examples/api/m-keep-range'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'
import RangeNote from '@/docs/[utility]/cmpt/range-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Keep a range of elements</p>
      <RangeNote />
      <MutableNote argName="anArray" utilityName="keepRange" />
    </>
  ),
}

export default what
