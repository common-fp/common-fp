import code from '@/built/code-examples/api/m-fill-with'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to initialize a collection to a value. Below, we have a
      baseball display showing the number of strikes, balls, and outs the
      batting team has.  Let's reset it back to zero at the end of the frame.
      `}
    </p>
    <CodeBlock debugId="m-fill-with/baseball" jsTs={code.baseball} />
  </>
)

export default Why
