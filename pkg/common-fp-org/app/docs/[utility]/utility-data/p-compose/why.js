import code from '@/built/code-examples/api/p-compose'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to name a set of async functions. Below, we're coding
      the checkout stage to our online shop. To prep our order, we need to call
      an API to assign our shipping amount and then make another call to
      finalize the total. Let's compose a function that does this and call
      it 'prepForCheckout.'
      `}
    </p>
    <CodeBlock debugId="p-compose/total" jsTs={code.total} />
  </>
)

export default Why
