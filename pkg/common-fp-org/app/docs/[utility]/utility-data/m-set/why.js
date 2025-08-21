import code from '@/built/code-examples/api/m-set'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to set a property. Below, we are building an array of
      cast members for True Detective Season 1.  Let's add a property 'isLead'
      using the set of lead members.
      `}
    </p>
    <CodeBlock debugId="m-set/lead-actors" jsTs={code.leadActors} />
  </>
)

export default Why
