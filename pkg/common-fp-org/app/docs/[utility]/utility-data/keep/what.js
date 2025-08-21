import code from '@/built/code-examples/api/keep'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Keep all <InlineCode>values</InlineCode> in the collection.
    </p>
  ),
}

export default what
