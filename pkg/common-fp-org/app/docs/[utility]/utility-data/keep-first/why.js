import code from '@/built/code-examples/api/keep-first'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we have ordered data and only care about the first elements.
        Below, we have a list of boots ordered by number sold.  Let's display
        our top three selling boots.
      `}
    </p>
    <CodeBlock debugId="keep-first/boots" jsTs={code.boots} />
  </>
)

export default Why
