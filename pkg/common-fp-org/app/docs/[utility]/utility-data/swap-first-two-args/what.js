import code from '@/built/code-examples/api/swap-first-two-args'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Return a function that calls <InlineCode content="fn" /> with the first
        two arguments swapped.
      </p>
    </>
  ),
}

export default what
