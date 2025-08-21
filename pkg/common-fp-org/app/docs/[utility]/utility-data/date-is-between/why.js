import code from '@/built/code-examples/api/date-is-between'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Why = () => (
  <>
    <p>
      We often want to see if a date falls within a range. Below, we see if our
      registration is active. Note our use of{' '}
      <InlineCode>exclusiveMax</InlineCode> to ensure the registration
      deactivates at expiration.
    </p>
    <CodeBlock debugId="date-is-between/expired" jsTs={code.expired} />
  </>
)

export default Why
