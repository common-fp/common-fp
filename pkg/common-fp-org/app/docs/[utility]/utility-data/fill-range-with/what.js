import code from '@/built/code-examples/api/fill-range-with'
import InlineCode from '@/cmpt/inline-code'
import RangeNote from '@/docs/[utility]/cmpt/range-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Fill an array range with <InlineCode>value</InlineCode>
      </p>
      <RangeNote />
    </>
  ),
}

export default what
