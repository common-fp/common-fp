import code from '@/built/code-examples/api/discard-first'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we get data in the form of arrays rather than objects. Below, we
      have chess results from a spreadsheet.  Let's remove the first two columns
      of personal info.
      `}
    </p>
    <CodeBlock debugId="discard-first/chess" jsTs={code.chess} />
  </>
)

export default Why
