import code from '@/built/code-examples/api/expand-start'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Expand a string to <InlineCode>length</InlineCode> by prepending{' '}
      <InlineCode>char</InlineCode>
    </p>
  ),
}

export default what
