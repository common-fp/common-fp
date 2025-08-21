import code from '@/built/code-examples/api/less-than-or-equal-to'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to test for thresholds. Below, it's a nice day out, so
      we're looking for restaurants we can walk to.  We'll comfortably walk 1.5
      miles, so let's find restaurants in that radius.
      `}
    </p>
    <CodeBlock
      debugId="less-than-or-equal-to/restaurants"
      jsTs={code.restaurants}
    />
  </>
)

export default Why
