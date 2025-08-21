import code from '@/built/code-examples/api/find-last-key-with-val'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Find the last index which has <InlineCode>value</InlineCode>.
    </p>
  ),
}

export default what
