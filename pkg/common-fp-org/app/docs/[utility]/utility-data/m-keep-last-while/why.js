import code from '@/built/code-examples/api/m-keep-last-while'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we have ordered data and only care about the last elements.
        Below, we run a game shop with limited shelf space.  Every quarter, we
        rotate out the games with under 50 sales.  Using our list of games
        sorted by number sold, let's find which ones to rotate out.
      `}
    </p>
    <CodeBlock debugId="m-keep-last-while/games" jsTs={code.games} />
  </>
)

export default Why
