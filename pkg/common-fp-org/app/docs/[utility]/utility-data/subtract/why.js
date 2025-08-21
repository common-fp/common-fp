import code from '@/built/code-examples/api/subtract'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to subtract a constant. Below, we're building a sword
      for our game, which attacks for five health. Let's test it on a zombie.
      `}
    </p>
    <CodeBlock debugId="subtract/attack" jsTs={code.attack} />
  </>
)

export default Why
