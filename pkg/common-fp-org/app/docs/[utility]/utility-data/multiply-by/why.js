import code from '@/built/code-examples/api/multiply-by'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we just gotta multiply. Below, Phil and Mary had dinner.  Let's
      use multiplyBy to add the 5% tax and find each of their bills.
      `}
    </p>
    <CodeBlock debugId="multiply-by/dinner" jsTs={code.dinner} />
  </>
)

export default Why
