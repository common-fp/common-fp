import code from '@/built/code-examples/api/first'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we have sorted data and only care about the first item.  Below,
      we ran out of bird feed, so we searched Walmart for 5 lb bags and sorted
      by price.  Let's get the price of the cheapest one.
      `}
    </p>
    <CodeBlock debugId="first/cheap" jsTs={code.cheap} />
  </>
)

export default Why
