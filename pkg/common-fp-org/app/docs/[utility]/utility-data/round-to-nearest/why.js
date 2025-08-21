import code from '@/built/code-examples/api/round-to-nearest'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often need to round numbers to specific precisions.  Below, we have a
      few 100-meter track times.  Official times need to be reported in
      hundredths, so let's round them.
      `}
    </p>
    <CodeBlock debugId="round-to-nearest/race" jsTs={code.race} />
  </>
)

export default Why
