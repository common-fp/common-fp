import code from '@/built/code-examples/api/contains'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often want to see if a collection contains a value.  Below, we see if
      Chris is in classroom A or B.
      `}
    </p>
    <CodeBlock debugId="contains/classroom" jsTs={code.classroom} />
  </>
)

export default Why
