import code from '@/built/code-examples/api/ends-with'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to see if a string ends with another. Below, someone
      turned in a lost notebook with only the last name printed, 'Davis.' Let's
      find which classes have a Davis.
      `}
    </p>
    <CodeBlock debugId="ends-with/notebook" jsTs={code.notebook} />
  </>
)

export default Why
