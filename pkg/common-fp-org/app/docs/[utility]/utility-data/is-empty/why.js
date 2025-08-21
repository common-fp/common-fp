import code from '@/built/code-examples/api/is-empty'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Usually we can iterate over collections without worrying whether they
      contain elements.  Sometimes, however, we need to treat empty collections
      differently. Below, we have appointments scheduled for the next couple of
      days.  Let's display "None" for the days without any appointments.
      `}
    </p>
    <CodeBlock debugId="is-empty/appointments" jsTs={code.appointments} />
  </>
)

export default Why
