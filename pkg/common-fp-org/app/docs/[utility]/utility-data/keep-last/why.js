import code from '@/built/code-examples/api/keep-last'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we have ordered data and only care about the last elements.
        Below, we have a list of soccer teams ordered by league placement.  The
        last three teams have to move to the lower league.  Let's list them.
      `}
    </p>
    <CodeBlock debugId="keep-last/relegated" jsTs={code.relegated} />
  </>
)

export default Why
