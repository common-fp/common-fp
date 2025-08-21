import code from '@/built/code-examples/api/p-map-values'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to asynchronously map the values of a collection.
      Below, let's call our mock store API to estimate the shipping for each
      item in our cart.
      `}
    </p>
    <CodeBlock debugId="p-map-values/shipping" jsTs={code.shipping} />
  </>
)

export default Why
