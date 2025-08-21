import code from '@/built/code-examples/api/m-discard-first-while'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      This is useful when we have sorted data and don't need to filter over all
      of it.  Below, we want to remove bots from our online game.  We assign a
      "human score" to each character every night.  With the sorted character
      list, let's remove those with a low score.
      `}
    </p>
    <CodeBlock debugId="m-discard-first-while/bots" jsTs={code.bots} />
  </>
)

export default Why
