import code from '@/built/code-examples/api/discard-range'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to remove a range of data.  Below, we have three weeks
      of Liz's bowling scores.  She can't make it Tuesdays and Wednesdays due to
      choir, so let's remove those.
      `}
    </p>
    <CodeBlock debugId="discard-range/bowling" jsTs={code.bowling} />
  </>
)

export default Why
