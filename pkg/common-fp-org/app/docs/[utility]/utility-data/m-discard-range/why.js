import code from '@/built/code-examples/api/m-discard-range'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to remove a range of elements. Below, we track the
      number of page visits to our site.  Unfortunately, a bot generated an
      abnormally high number of visits for two hours.  We stopped the bot; now
      let's remove those visits and calculate our hourly average.
      `}
    </p>
    <CodeBlock debugId="m-discard-range/visitors" jsTs={code.visitors} />
  </>
)

export default Why
