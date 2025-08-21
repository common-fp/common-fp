import code from '@/built/code-examples/api/p-find'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to asynchronously find a value that passes a condition.
      Below, we're running an online store.  Customers have expressed confusion
      about discount codes being applied. Let's clarify by showing which item
      qualifies their order for a code.
      `}
    </p>
    <CodeBlock debugId="p-find/code" jsTs={code.code} />
  </>
)

export default Why
