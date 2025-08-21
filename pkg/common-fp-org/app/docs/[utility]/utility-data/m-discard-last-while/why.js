import code from '@/built/code-examples/api/m-discard-last-while'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      This is useful when we have sorted data and don't need to filter over all
      of it.  Below, we have a list of accounts ordered by activity.  Let's
      remove accounts that have been inactive for at least a year.
      `}
    </p>
    <CodeBlock debugId="m-discard-last-while/accounts" jsTs={code.accounts} />
  </>
)

export default Why
