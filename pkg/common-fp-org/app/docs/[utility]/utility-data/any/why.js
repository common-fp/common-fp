import code from '@/built/code-examples/api/any'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often want to test if any entry passes a condition.  Below, we see if
      anyone's birthday is today.  If so, we should sing!
      `}
    </p>
    <CodeBlock debugId="any/birthday" jsTs={code.birthday} />
  </>
)

export default Why
