import code from '@/built/code-examples/api/p-any'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to asynchronously test if any entry passes a condition.
      Below, we call a mock store API to see if any item in our shopping cart
      belongs to a bundle deal.  If so, we should try to upsell the shopper.
      `}
    </p>
    <CodeBlock debugId="p-any/deal" jsTs={code.deal} />
  </>
)

export default Why
