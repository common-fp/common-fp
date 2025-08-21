import code from '@/built/code-examples/api/p-wait-ms'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Return a promise that resolves after <InlineCode content="ms" />
    </p>
  ),
}

export default what
