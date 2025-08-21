import code from '@/built/code-examples/api/pass-through'
import CodeBlock from '@/cmpt/code-block'
import ComposableNote from '@/docs/[utility]/cmpt/composable-note'

const Why = () => (
  <>
    <ComposableNote justLike="compose" utility="passThrough" />
    <p>
      {`
      Sometimes we want to pass a value through some functions to get a result.
      Below, we have the five-day weather forecast and want to calculate the
      average low.  Let's pass the forecast through some functions to do this.
      `}
    </p>
    <CodeBlock debugId="pass-through/weather" jsTs={code.weather} />
  </>
)

export default Why
