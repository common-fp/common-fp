import code from '@/built/code-examples/api/discard'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Discard all <InlineCode>values</InlineCode> from the collection.
    </p>
  ),
}

export default what
