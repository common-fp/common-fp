import code from '@/built/code-examples/api/divide-by'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we just gotta divide. Below, we have a dinner and want to share
      it among two people. Let's figure out how much each person gets.
      `}
    </p>
    <CodeBlock debugId="divide-by/dinner" jsTs={code.dinner} />
  </>
)

export default Why
