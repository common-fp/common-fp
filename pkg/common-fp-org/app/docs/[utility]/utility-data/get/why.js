import code from '@/built/code-examples/api/get'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need a property's value. Below, we're organizing a
      conference.  We have a list of attendees and are printing pins of
      everyone's first name.  Let's get a list of first names.
      `}
    </p>
    <CodeBlock debugId="get/conference" jsTs={code.conference} />
  </>
)

export default Why
