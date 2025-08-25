import code from '@/built/code-examples/api/m-keep-range'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to keep a range of elements. Below, we have the NFL box
      scores for two Eagles receivers.  Let's find their combined total
      receptions and yards.
      `}
    </p>
    <CodeBlock debugId="m-keep-range/football" jsTs={code.football} />
  </>
)

export default Why
