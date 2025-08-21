import code from '@/built/code-examples/api/keep-range'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we have a range of data we're focused on. Below, Chris has
        been shooting ten free throws every day and recording how many he makes.
        He only does this at school, so there's no data for the weekends. Let's
        keep the weekday numbers and find his average.
      `}
    </p>
    <CodeBlock debugId="keep-range/free-throws" jsTs={code.freeThrows} />
  </>
)

export default Why
