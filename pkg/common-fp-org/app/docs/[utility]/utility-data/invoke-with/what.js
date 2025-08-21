import code from '@/built/code-examples/api/invoke-with'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Call <InlineCode>fn</InlineCode> with <InlineCode>args</InlineCode> and
        return the result.
      </p>
    </>
  ),
}

export default what
