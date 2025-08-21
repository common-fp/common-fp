import code from '@/built/code-examples/api/find'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to find a value that passes a condition. Below, we want
      to find our neighbor Tom's number to invite him for some barbecue.
      `}
    </p>
    <CodeBlock debugId="find/directory" jsTs={code.directory} />
  </>
)

export default Why
