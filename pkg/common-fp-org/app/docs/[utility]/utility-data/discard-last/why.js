import code from '@/built/code-examples/api/discard-last'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we have sorted data and don't need elements from the end. Below,
      we are starting a game.  We're rolling to see our character's strength by
      casting four dice and removing the lowest two.  Let's find our strength!
      `}
    </p>
    <CodeBlock debugId="discard-last/dice" jsTs={code.dice} />
  </>
)

export default Why
