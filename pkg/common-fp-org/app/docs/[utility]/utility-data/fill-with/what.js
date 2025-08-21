import code from '@/built/code-examples/api/fill-with'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Fill a collection with <InlineCode>value</InlineCode>
    </p>
  ),
}

export default what
