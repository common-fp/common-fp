import code from '@/built/code-examples/api/m-assign-defaults'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to mutate a collection by assigning defaults.  Below,
      we have a list of wedding dinner orders.  By default they're served
      chicken and rice, but they can choose tofu or a salad.  Let's get the final
      orders for the wedding.
      `}
    </p>
    <CodeBlock debugId="m-assign-defaults/dinner" jsTs={code.dinner} />
  </>
)

export default Why
