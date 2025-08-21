import code from '@/built/code-examples/api/starts-with'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to see if a string starts with another.  Below, someone
      turned in a lost notebook with only a first name, 'Chris.'.  Let's find
      which classes have a Chris.
      `}
    </p>
    <CodeBlock debugId="starts-with/notebook" jsTs={code.notebook} />
  </>
)

export default Why
