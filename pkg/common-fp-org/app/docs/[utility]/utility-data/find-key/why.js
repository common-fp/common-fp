import code from '@/built/code-examples/api/find-key'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to find a key based off a condition.  Below, we are
      heading to a cat cafe and want to schedule time to pet a kitten.  Let's
      find one.
      `}
    </p>
    <CodeBlock debugId="find-key/kitten" jsTs={code.kitten} />
  </>
)

export default Why
