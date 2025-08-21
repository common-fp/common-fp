import code from '@/built/code-examples/api/keep'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we only want certain values.  Below, we have some weekly
      volunteers at the cat shelter.  The weekend helpers' jobs are especially
      difficult, so let's list their names for "thank you" cards.
      `}
    </p>
    <CodeBlock debugId="keep/volunteers" jsTs={code.volunteers} />
  </>
)

export default Why
