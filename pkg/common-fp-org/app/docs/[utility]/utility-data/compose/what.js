import code from '@/built/code-examples/api/compose'
import InlineCode from '@/cmpt/inline-code'
import ComposeNote from '@/docs/[utility]/cmpt/compose-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Create a function that passes a value through{' '}
        <InlineCode>fnArray</InlineCode>.
      </p>
      <ComposeNote />
    </>
  ),
}

export default what
