import code from '@/built/code-examples/api/randomly-keep'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Randomly pick <InlineCode content="num" /> entries.
    </p>
  ),
}

export default what
