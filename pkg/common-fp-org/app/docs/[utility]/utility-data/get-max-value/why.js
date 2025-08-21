import code from '@/built/code-examples/api/get-max-value'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need the largest number in a collection.  Below, we're
      preparing to load test our website.  Using last week's metrics, let's find
      the maximum number of site visits so we know how many to emulate
      for testing.
      `}
    </p>
    <CodeBlock debugId="get-max-value/views" jsTs={code.views} />
  </>
)

export default Why
