import code from '@/built/code-examples/api/is-at-or-after'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need to compare dates. Below, we have some tablets sent in
      for repair.  Those under warranty can be repaired now, so let's find them.
      `}
    </p>
    <CodeBlock debugId="is-at-or-after/warranty" jsTs={code.warranty} />
  </>
)

export default Why
