import code from '@/built/code-examples/api/p-discard-when'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to discard entries that pass an asynchronous condition.
      Below, we need to find the items in our shopping cart requiring a shipping
      fee.  Let's call the mock store API to remove items in our shopping cart
      with free shipping.
      `}
    </p>
    <CodeBlock debugId="p-discard-when/shipping" jsTs={code.shipping} />
  </>
)

export default Why
