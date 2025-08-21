import code from '@/built/code-examples/api/find-key-with-val'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to find the key to a value.  Below, we have a raffle.
      Let's find the winner.
      `}
    </p>
    <CodeBlock debugId="find-key-with-val/raffle" jsTs={code.raffle} />
  </>
)

export default Why
