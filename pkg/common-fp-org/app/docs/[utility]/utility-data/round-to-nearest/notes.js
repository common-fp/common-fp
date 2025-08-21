import code from '@/built/code-examples/api/round-to-nearest'
import CodeBlock from '@/cmpt/code-block'

const Notes = () => (
  <>
    <p>
      {`
      The precision is validated.  Below shows the errors you'll receive with
      bad input.
      `}
    </p>
    <CodeBlock debugId="round-to-nearest/errors" jsTs={code.errors} />
  </>
)

export default Notes
