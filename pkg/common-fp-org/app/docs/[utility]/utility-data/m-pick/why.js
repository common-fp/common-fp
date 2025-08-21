import code from '@/built/code-examples/api/m-pick'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to pick entries by key. Below, we run a cat shelter.  A
      visitor, Grace, is adopting Bella and Leo.  Let's get the cats'
      information to send Grace off with a copy.
      `}
    </p>
    <CodeBlock debugId="m-pick/adopt" jsTs={code.adopt} />
  </>
)

export default Why
