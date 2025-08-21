import code from '@/built/code-examples/api/with-numbers-descending'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often need to order numerically.  Below, we have baseball's home run
      leaders.  Let's see who has the most home runs.
      `}
    </p>
    <CodeBlock
      debugId="with-numbers-descending/baseball"
      jsTs={code.baseball}
    />
  </>
)

export default Why
