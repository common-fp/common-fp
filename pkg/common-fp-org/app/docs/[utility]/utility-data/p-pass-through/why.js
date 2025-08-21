import code from '@/built/code-examples/api/p-pass-through'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to pass a value through asynchronous functions to
      process a result.  Below, we're coding the checkout stage to our online
      shop.  Let's first call the API to assign our shipping amount, then
      finalize the total.
      `}
    </p>
    <CodeBlock debugId="p-pass-through/total" jsTs={code.total} />
  </>
)

export default Why
