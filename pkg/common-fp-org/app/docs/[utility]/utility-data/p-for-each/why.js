import code from '@/built/code-examples/api/p-for-each'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to call an async function for each entry in a
      collection. Below, we want to track the items in our customer's cart.
      Let's call our mock store API to track each item.
      `}
    </p>
    <CodeBlock debugId="p-for-each/track" jsTs={code.track} />
  </>
)

export default Why
