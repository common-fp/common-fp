import code from '@/built/code-examples/api/m-fill-range-with'
import InlineCode from '@/cmpt/inline-code'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'
import RangeNote from '@/docs/[utility]/cmpt/range-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Fill an array range with <InlineCode>value</InlineCode>
      </p>
      <RangeNote />
      <MutableNote argName="anArray" utilityName="fillRange" />
    </>
  ),
}

export default what
