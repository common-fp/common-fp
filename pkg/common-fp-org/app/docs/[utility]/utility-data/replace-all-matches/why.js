import code from '@/built/code-examples/api/replace-all-matches'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to replace strings in text.  Below, we are an agency
      supporting travelers from the US going to Spain and France.  People don't
      realize the degrees are Celsius in the weather reports, so let's quickly
      add 'C' after each degree.
      `}
    </p>
    <CodeBlock debugId="replace-all-matches/weather" jsTs={code.weather} />
  </>
)

export default Why
