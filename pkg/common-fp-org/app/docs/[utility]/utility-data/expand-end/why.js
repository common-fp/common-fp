import code from '@/built/code-examples/api/expand-end'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      One case for expandEnd is to format data.  Below, we print a brownie recipe
      while aligning the amounts.
      `}
    </p>
    <CodeBlock debugId="expand-end/recipe" jsTs={code.recipe} />
  </>
)

export default Why
