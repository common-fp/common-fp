import code from '@/built/code-examples/api/with-dates-ascending'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often need to order by date.  Below, we have some social media
      comments.  Let's order them by the posted date.
      `}
    </p>
    <CodeBlock debugId="with-dates-ascending/comments" jsTs={code.comments} />
  </>
)

export default Why
