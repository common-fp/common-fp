import code from '@/built/code-examples/api/assign-defaults'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      One common case is to assign default options.  Below, we write a function
      that greets someone.  By default we greet "<Name>" with "How are you?"
      `}
    </p>
    <CodeBlock debugId="assign-defaults/greet" jsTs={code.greet} />
  </>
)

export default Why
