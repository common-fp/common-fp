import code from '@/built/code-examples/api/compose'
import CodeBlock from '@/cmpt/code-block'
import ComposableNote from '@/docs/[utility]/cmpt/composable-note'

const Why = () => (
  <>
    <ComposableNote justLike="passThrough" utility="compose" />
    <p>
      {`
      Below, we have the five-day weather forecast.  Let's compose a function to
      get the average low.
      `}
    </p>
    <CodeBlock debugId="compose/weather" jsTs={code.weather} />
  </>
)

export default Why
