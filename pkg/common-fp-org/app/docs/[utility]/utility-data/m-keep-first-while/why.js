import code from '@/built/code-examples/api/m-keep-first-while'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we have ordered data and only care about the first elements.
        Below, we have students who sold magazine subscriptions, ordered by
        number sold.  Students who sold ten or more get to ride a limo over
        lunch.  Let's see who rides the limo.
      `}
    </p>
    <CodeBlock debugId="m-keep-first-while/limo" jsTs={code.limo} />
  </>
)

export default Why
