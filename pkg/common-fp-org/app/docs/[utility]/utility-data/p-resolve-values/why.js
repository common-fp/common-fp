import code from '@/built/code-examples/api/p-resolve-values'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to resolve the values of a collection.  Below, we are
      coding a checkout process for our online store.  To prep the order, we
      need to call the API to get the sales tax and shipping amount. Let's
      resolve our updated order with those properties assigned.
      `}
    </p>
    <CodeBlock debugId="p-resolve-values/prep" jsTs={code.prep} />
  </>
)

export default Why
