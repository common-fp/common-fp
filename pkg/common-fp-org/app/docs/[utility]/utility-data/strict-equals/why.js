import code from '@/built/code-examples/api/strict-equals'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often want to test for strict equality.  Below, we have our basketball
      schedule for the season.  Our rivals are the pandas, so let's see when we
      face them.
      `}
    </p>
    <CodeBlock debugId="strict-equals/rivals" jsTs={code.rivals} />
  </>
)

export default Why
