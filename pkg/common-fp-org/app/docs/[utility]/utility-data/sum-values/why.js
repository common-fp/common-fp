import code from '@/built/code-examples/api/sum-values'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often want to total up some numbers. Below, Jen and Mike went out to
      breakfast.  Let's figure their subtotal.
      `}
    </p>
    <CodeBlock debugId="sum-values/subtotal" jsTs={code.subtotal} />
  </>
)

export default Why
