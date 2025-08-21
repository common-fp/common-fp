import code from '@/built/code-examples/api/discard-last-while'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      This is useful when we have sorted data and don't need to filter over all
      of it.  Below, we have a list of online players sorted by gold.  Players
      with over 1,000 gold are obviously cheaters, so let's remove them.
      `}
    </p>
    <CodeBlock debugId="discard-last-while/gold" jsTs={code.gold} />
  </>
)

export default Why
