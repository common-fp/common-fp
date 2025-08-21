import code from '@/built/code-examples/api/expand'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want a string to have a certain length.  Below, we format a
      comment header stating that the code should not be modified.
      `}
    </p>
    <CodeBlock debugId="expand/comment" jsTs={code.comment} />
  </>
)

export default Why
