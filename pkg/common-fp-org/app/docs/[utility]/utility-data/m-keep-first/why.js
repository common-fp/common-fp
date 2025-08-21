import code from '@/built/code-examples/api/m-keep-first'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we have ordered data and only care about the first elements.
        Below, we have the top 5 women of the Paris Olympics Single Canoe Slalom
        event.  Let's find the medalists.
      `}
    </p>
    <CodeBlock debugId="m-keep-first/medals" jsTs={code.medals} />
  </>
)

export default Why
