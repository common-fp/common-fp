import code from '@/built/code-examples/api/return-undefined'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Developers commonly use this as a default. Below, we maintain a keyboard
      customizer.  We only cover one macro key for now, which does nothing by
      default.  Let's have it type 'macro1' to make sure our customizer
      is working.
      `}
    </p>
    <CodeBlock debugId="return-undefined/macro" jsTs={code.macro} />
  </>
)

export default Why
