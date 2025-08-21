import code from '@/built/code-examples/api/invert'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      One common case for invert is to get a two-way enum mapping. Below, we run
      a stock reporting website. People don't remember stock symbols, so we can
      use invert to convert between symbols and company names. With that, let's
      create a report for our users, as well as let them query the price for a
      single company.
      `}
    </p>
    <CodeBlock debugId="invert/stocks" jsTs={code.stocks} />
  </>
)

export default Why
