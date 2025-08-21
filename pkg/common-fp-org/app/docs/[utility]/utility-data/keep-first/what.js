import code from '@/built/code-examples/api/keep-first'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Keep the first <InlineCode>num</InlineCode> elements of a sequence
    </p>
  ),
}

export default what
