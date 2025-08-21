import code from '@/built/code-examples/api/all'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often want to know if all entries pass a condition.  Below, a classroom
      earns a pizza party if all students score at least a B.  Let's see which
      classrooms get pizza.
      `}
    </p>
    <CodeBlock debugId="all/party" jsTs={code.party} />
  </>
)

export default Why
