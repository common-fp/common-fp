import code from '@/built/code-examples/api/with-strings-descending'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often want to order reverse-alphabetically.  Below, we have some photos
      of friends.  Let's find photos of Tom by ordering them in reverse.
      `}
    </p>
    <CodeBlock debugId="with-strings-descending/photos" jsTs={code.photos} />
  </>
)

export default Why
