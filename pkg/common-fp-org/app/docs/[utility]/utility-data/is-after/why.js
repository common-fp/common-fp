import code from '@/built/code-examples/api/is-after'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need to compare dates. Below, it's fridge cleaning time.
      Let's keep the items that are still good.
      `}
    </p>
    <CodeBlock debugId="is-after/fridge" jsTs={code.fridge} />
  </>
)

export default Why
