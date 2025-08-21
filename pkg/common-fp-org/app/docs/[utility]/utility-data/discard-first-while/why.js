import code from '@/built/code-examples/api/discard-first-while'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      This is useful when we have sorted data and don't need to filter over all
      of it.  Below, we have a list of sorted test scores.  We want to remove
      the zeroes since those students weren't in class.
      `}
    </p>
    <CodeBlock debugId="discard-first-while/scores" jsTs={code.scores} />
  </>
)

export default Why
