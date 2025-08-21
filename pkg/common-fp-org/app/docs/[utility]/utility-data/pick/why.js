import code from '@/built/code-examples/api/pick'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to pick entries by key. Below, we run a restaurant and
      are picking our featured menu for the week.  Let's choose chicken wings
      and the BLT wrap.
      `}
    </p>
    <CodeBlock debugId="pick/featured" jsTs={code.featured} />
  </>
)

export default Why
