import code from '@/built/code-examples/api/truncate-to-n-chars'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Truncate a string to <InlineCode content="n" /> chars,
      {`
        replacing the last three characters with '...'.
      `}
    </p>
  ),
}

export default what
