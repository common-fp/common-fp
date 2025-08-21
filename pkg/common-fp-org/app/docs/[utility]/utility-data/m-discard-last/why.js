import code from '@/built/code-examples/api/m-discard-last'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we get data in the form of arrays rather than objects. Below, we
      have weather data from a spreadsheet.  For now we don't care about the max
      wind speed nor climate columns, so let's remove them.
      `}
    </p>
    <CodeBlock debugId="m-discard-last/weather" jsTs={code.weather} />
  </>
)

export default Why
