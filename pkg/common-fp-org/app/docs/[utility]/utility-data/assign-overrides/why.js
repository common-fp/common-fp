import code from '@/built/code-examples/api/assign-overrides'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      Sometimes we have required entries and want to combine them with others.
      Below, we need to make a list of gifts for the class. We must give the
      teacher an apple, but the rest is up to us.
    </p>
    <CodeBlock debugId="assign-overrides/gifts" jsTs={code.gifts} />
  </>
)

export default Why
