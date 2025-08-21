import code from '@/built/code-examples/api/is-laden'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Usually we can iterate over collections without worrying whether they
      contain elements.  Sometimes, however, we need to treat non-empty
      collections differently. Below, we have appointments scheduled for the
      next week.  To avoid a bunch of empty days in our display, let's only
      show those with appointments.
      `}
    </p>
    <CodeBlock debugId="is-laden/appointments" jsTs={code.appointments} />
  </>
)

export default Why
