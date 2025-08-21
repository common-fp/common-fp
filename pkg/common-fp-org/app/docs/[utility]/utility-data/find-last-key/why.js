import code from '@/built/code-examples/api/find-last-key'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to find the last index that passes a condition.  Below,
      we have Liz's schedule for the week.  She can only take three appointments
      per day.  Her client asks to schedule an appointment as late in the week
      as possible.  Let's find which day she has open.
      `}
    </p>
    <CodeBlock debugId="find-last-key/opening" jsTs={code.opening} />
  </>
)

export default Why
