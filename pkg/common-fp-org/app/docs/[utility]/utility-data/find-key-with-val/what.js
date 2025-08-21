import code from '@/built/code-examples/api/find-key-with-val'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Find the first key or index of <InlineCode>collection</InlineCode> which
      has <InlineCode>value</InlineCode>.
    </p>
  ),
}

export default what
