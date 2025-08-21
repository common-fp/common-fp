import code from '@/built/code-examples/api/add'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to add a constant. Below, we're building a spell for our
      game that heals for five health.  Let's test it on our hero Meg.
      `}
    </p>
    <CodeBlock debugId="add/heal" jsTs={code.heal} />
  </>
)

export default Why
