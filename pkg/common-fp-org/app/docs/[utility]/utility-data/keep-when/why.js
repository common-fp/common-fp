import code from '@/built/code-examples/api/keep-when'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we want to keep entries that pass a condition. Below, we have
        some 100-meter times.  People who ran it in under 13 minutes qualify for
        the next round.  Let's list the qualified runners.
      `}
    </p>
    <CodeBlock
      debugId="keep-when/one-hundred-meter"
      jsTs={code.oneHundredMeter}
    />
  </>
)

export default Why
