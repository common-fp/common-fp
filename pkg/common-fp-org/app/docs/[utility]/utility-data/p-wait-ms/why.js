import code from '@/built/code-examples/api/p-wait-ms'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often need to asynchronously wait an amount of time.  Below, we've had
      issues with our store API taking too long.  Let's test it by mocking a
      timeout flow.
      `}
    </p>
    <CodeBlock debugId="p-wait-ms/timeout" jsTs={code.timeout} />
  </>
)

export default Why
