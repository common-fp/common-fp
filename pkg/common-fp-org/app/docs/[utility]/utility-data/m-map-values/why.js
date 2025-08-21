import code from '@/built/code-examples/api/m-map-values'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to change each value based on a function. Below, we have
      a 20% sale across all soccer products in our store.  Let's map the old
      prices to the new ones.
      `}
    </p>
    <CodeBlock debugId="m-map-values/sale" jsTs={code.sale} />
  </>
)

export default Why
