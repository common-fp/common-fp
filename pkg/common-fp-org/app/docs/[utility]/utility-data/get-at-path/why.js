import code from '@/built/code-examples/api/get-at-path'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to reach a deep property. Below, we have a contact list
      for our team.  We're picking everyone up, and they all live in the area,
      so let's get everyone's streets.
      `}
    </p>
    <CodeBlock debugId="get-at-path/streets" jsTs={code.streets} />
  </>
)

export default Why
