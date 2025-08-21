import code from '@/built/code-examples/api/m-discard-first'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we get data in the form of arrays rather than objects. Below, we
      have logs with redundant data.  Specifically, we only have one server and
      one realm.  Let's remove that data.
      `}
    </p>
    <CodeBlock debugId="m-discard-first/logs" jsTs={code.logs} />
  </>
)

export default Why
