import code from '@/built/code-examples/api/greater-than-or-equal-to'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to test for thresholds. Below, we're on a class field
      trip to Six Flags.  Let's see who can ride the roller coaster.
      `}
    </p>
    <CodeBlock
      debugId="greater-than-or-equal-to/roller-coaster"
      jsTs={code.rollerCoaster}
    />
  </>
)

export default Why
