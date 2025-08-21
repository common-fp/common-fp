import code from '@/built/code-examples/api/expand-end'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Expand a string to <InlineCode>length</InlineCode> by appending{' '}
      <InlineCode>char</InlineCode>
    </p>
  ),
}

export default what
