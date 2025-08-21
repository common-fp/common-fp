import code from '@/built/code-examples/api/m-append-all'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to mutate an array by pushing values onto it.  Below,
      our apartment is receiving a few fliers.  Let's update our mailboxes with
      the junkmail.
      `}
    </p>
    <CodeBlock debugId="m-append-all/junkmail" jsTs={code.junkmail} />
  </>
)

export default Why
