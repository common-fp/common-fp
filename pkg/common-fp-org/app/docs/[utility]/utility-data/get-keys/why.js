import code from '@/built/code-examples/api/get-keys'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need the keys of a collection.  Below, we have some 100-meter
      times.  People who ran it in under 13 minutes qualify for the next round.
      Let's list the qualified runners.
      `}
    </p>
    <CodeBlock
      debugId="get-keys/one-hundred-meter"
      jsTs={code.oneHundredMeter}
    />
  </>
)

export default Why
