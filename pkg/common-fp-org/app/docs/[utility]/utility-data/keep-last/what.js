import code from '@/built/code-examples/api/keep-last'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Keep the last <InlineCode>num</InlineCode> elements of a sequence
    </p>
  ),
}

export default what
