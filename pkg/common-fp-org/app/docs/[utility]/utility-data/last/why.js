import code from '@/built/code-examples/api/last'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we have sorted data and only care about the last item.  Below,
      we noticed the Harry Potter book wasn't at our library. Let's find the
      last person to check it out so we can follow up with them.
      `}
    </p>
    <CodeBlock debugId="last/checkout" jsTs={code.checkout} />
  </>
)

export default Why
