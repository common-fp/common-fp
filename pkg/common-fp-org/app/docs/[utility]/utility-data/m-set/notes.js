import code from '@/built/code-examples/api/m-set'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Notes = () => (
  <>
    <p>
      This utility requires the key be assignable on{' '}
      <InlineCode>anything</InlineCode>
    </p>
    <p>The example shows the error thrown</p>
    <CodeBlock debugId="m-set/error" jsTs={code.error} />
  </>
)

export default Notes
