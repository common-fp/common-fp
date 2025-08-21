import code from '@/built/code-examples/api/get-average-value'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need the average. Below, we have some test scores. The class
      earns a pizza party if they average a B. Let's find the average.
      `}
    </p>
    <CodeBlock debugId="get-average-value/scores" jsTs={code.scores} />
  </>
)

export default Why
