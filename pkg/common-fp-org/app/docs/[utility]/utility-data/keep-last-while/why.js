import code from '@/built/code-examples/api/keep-last-while'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we have ordered data and only care about the last elements.
        Below, we are running a streaming service and have added a few new
        cooking shows.  We only renew shows with at least a thousand views, so
        let's list the ones we need to cancel.
      `}
    </p>
    <CodeBlock debugId="keep-last-while/shows" jsTs={code.shows} />
  </>
)

export default Why
