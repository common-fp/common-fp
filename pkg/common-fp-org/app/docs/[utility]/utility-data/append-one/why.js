import code from '@/built/code-examples/api/append-one'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      This is useful when we want to add an item to an array.  Below, we add an
      apple to the shopping cart.
      `}
    </p>
    <CodeBlock debugId="append-one/cart" jsTs={code.cart} />
  </>
)

export default Why
