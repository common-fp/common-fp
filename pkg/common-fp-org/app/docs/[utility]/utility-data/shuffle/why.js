import code from '@/built/code-examples/api/shuffle'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to randomly order an array. Below, we have a list of
      players for a game of Uno.  Let's randomize the turns.
      `}
    </p>
    <CodeBlock debugId="shuffle/turns" jsTs={code.turns} />
  </>
)

export default Why
