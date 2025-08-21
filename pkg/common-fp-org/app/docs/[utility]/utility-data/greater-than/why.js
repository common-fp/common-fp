import code from '@/built/code-examples/api/greater-than'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to test for thesholds. Below, we want to display boots
      which have sold over 70 in the last week.  Let's find our hot sellers.
      `}
    </p>
    <CodeBlock debugId="greater-than/boots" jsTs={code.boots} />
  </>
)

export default Why
