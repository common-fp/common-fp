import code from '@/built/code-examples/api/get-min-value'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need the smallest number in a collection.  Below, Liz is
      tracking her times for 5-mile bike trips each day.  Let's find her fastest
      time so she knows what to shoot for.
      `}
    </p>
    <CodeBlock debugId="get-min-value/biking" jsTs={code.biking} />
  </>
)

export default Why
