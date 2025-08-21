import code from '@/built/code-examples/api/default-falsey-val-to'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want a default value in place of a falsey one. Below, we let
      people build their own bear.  If they don't provide a name, let's name
      it Teddy.
      `}
    </p>
    <CodeBlock debugId="default-falsey-val-to/teddy" jsTs={code.teddy} />
  </>
)

export default Why
