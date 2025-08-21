import code from '@/built/code-examples/api/fill-with'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to initialize a collection to a value.  Below, we have
      the money per player in a game of Monopoly.  They decide to restart the
      game since Jen is so far ahead. Let's reset everyone's money.
      `}
    </p>
    <CodeBlock debugId="fill-with/monopoly" jsTs={code.monopoly} />
  </>
)

export default Why
