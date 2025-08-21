import code from '@/built/code-examples/api/for-each'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Call a function for each entry in <InlineCode>collection</InlineCode>
    </p>
  ),
}

export default what
