import code from '@/built/code-examples/api/append'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to append a string.  Below, Chris has a to-do list for
      today.  Let's append a check or a box to each item.
      `}
    </p>
    <CodeBlock debugId="append/checklist" jsTs={code.checklist} />
  </>
)

export default Why
