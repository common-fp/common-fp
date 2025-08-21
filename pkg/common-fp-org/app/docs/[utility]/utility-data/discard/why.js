import code from '@/built/code-examples/api/discard'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we don't want certain values.  Below, Ken doesn't like green or
      yellow Skittles.  Let's discard them.
      `}
    </p>
    <CodeBlock debugId="discard/skittles" jsTs={code.skittles} />
  </>
)

export default Why
