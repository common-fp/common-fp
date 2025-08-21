import code from '@/built/code-examples/api/prepend-one'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to prepend an item. Below, we are running a restaurant
      and have a queue of tickets. New tickets usually get added to the end.
      Unfortunately, one customer received the wrong order, so we need to
      quickly remake it. Let's prepend his order to the queue.
      `}
    </p>
    <CodeBlock debugId="prepend-one/cook" jsTs={code.cook} />
  </>
)

export default Why
