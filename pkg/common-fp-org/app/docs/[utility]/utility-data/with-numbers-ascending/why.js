import code from '@/built/code-examples/api/with-numbers-ascending'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often need to order numerically.  Below, we have baseball's home run
      leaders.  Let's see who has the fewest strikeouts.
      `}
    </p>
    <CodeBlock debugId="with-numbers-ascending/baseball" jsTs={code.baseball} />
  </>
)

export default Why
