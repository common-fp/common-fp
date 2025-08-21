import code from '@/built/code-examples/api/discard-when'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to discard data.  Below, we have an array of soda can
      weight measurements fresh off the assembly.  We can't ship any outside our
      threshold of +/-0.02 fl oz from 12.  Let's discard them.
      `}
    </p>
    <CodeBlock debugId="discard-range/soda" jsTs={code.soda} />
  </>
)

export default Why
