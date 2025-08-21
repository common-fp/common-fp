import code from '@/built/code-examples/api/discard-last'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Discard the last <InlineCode>num</InlineCode> values
    </p>
  ),
}

export default what
