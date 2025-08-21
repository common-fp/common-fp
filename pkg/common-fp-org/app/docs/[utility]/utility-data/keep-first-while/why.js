import code from '@/built/code-examples/api/keep-first-while'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we have ordered data and only care about the first elements.
        Below, we have an ordered list of 100-meter times.  People who ran it in
        under 13 minutes qualify for the next round.  Let's list the
        qualified runners.
      `}
    </p>
    <CodeBlock
      debugId="keep-first-while/one-hundred-meter"
      jsTs={code.oneHundredMeter}
    />
  </>
)

export default Why
