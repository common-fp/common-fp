import code from '@/built/code-examples/api/m-order'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to mutate an array by ordering it. Below, we are
      building a game with an inventory.  Players will want to see what's
      weighing them down, so let's allow them to order by weight.
      `}
    </p>
    <CodeBlock debugId="m-order/inventory" jsTs={code.inventory} />
  </>
)

export default Why
