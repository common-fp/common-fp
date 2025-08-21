import code from '@/built/code-examples/api/get-random-value'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to pick a random value.  Below, we're playing a game of
      Monopoly.  Let's see who goes first.
      `}
    </p>
    <CodeBlock debugId="get-random-value/first" jsTs={code.first} />
  </>
)

export default Why
