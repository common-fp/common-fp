import code from '@/built/code-examples/api/default-nullish-val-to'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      Sometimes we want a default value specifically when undefined or null are
      passed.
    </p>
    <p>
      {`
      Below, we have the money per player in a game of Monopoly.  Mike joined
      late, so he doesn't have a value yet.  Let's start him off with 1500.
      `}
    </p>
    <CodeBlock debugId="default-nullish-val-to/monopoly" jsTs={code.monopoly} />
  </>
)

export default Why
