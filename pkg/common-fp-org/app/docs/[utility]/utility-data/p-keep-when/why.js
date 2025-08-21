import code from '@/built/code-examples/api/p-keep-when'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to keep entries that pass an asynchronous condition.
      Below, we call a mock store API to see which items in our shopping cart
      give us rewards.
      `}
    </p>
    <CodeBlock debugId="p-keep-when/rewards" jsTs={code.rewards} />
  </>
)

export default Why
