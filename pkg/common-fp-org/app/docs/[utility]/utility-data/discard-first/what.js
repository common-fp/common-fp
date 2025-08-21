import code from '@/built/code-examples/api/discard-first'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Discard the first <InlineCode>num</InlineCode> values
    </p>
  ),
}

export default what
