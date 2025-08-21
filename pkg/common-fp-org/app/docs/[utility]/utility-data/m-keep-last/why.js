import code from '@/built/code-examples/api/m-keep-last'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we have ordered data and only care about the last items.
        Below, we run a shop "Brooke's Books" and are preparing for our monthly
        meeting.  Let's report our sales for the last two months.
      `}
    </p>
    <CodeBlock debugId="m-keep-last/book-shop" jsTs={code.bookShop} />
  </>
)

export default Why
