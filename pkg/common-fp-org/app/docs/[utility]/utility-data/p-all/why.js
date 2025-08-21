import code from '@/built/code-examples/api/p-all'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to asynchronously test if all entries pass a condition.
      Below, we call a mock store API to see if all items in our shopping cart
      are in stock.  If so, we should let them know of a pickup discount.
      `}
    </p>
    <CodeBlock debugId="p-all/discount" jsTs={code.discount} />
  </>
)

export default Why
