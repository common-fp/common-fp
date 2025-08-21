import code from '@/built/code-examples/api/with-strings-ascending'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often want to order alphabetically.  Below, we have some photos of
      friends.  Let's find photos of Chris by ordering them.
      `}
    </p>
    <CodeBlock debugId="with-strings-ascending/photos" jsTs={code.photos} />
  </>
)

export default Why
