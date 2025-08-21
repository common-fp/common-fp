import code from '@/built/code-examples/api/transpose'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Transposing is helpful when we work with spreadsheets.  Below, we have
      weather data and want to print each day's forecast.  Let's use transpose
      to group it by day for easy reporting.
      `}
    </p>
    <CodeBlock debugId="transpose/forecast" jsTs={code.forecast} />
  </>
)

export default Why
