import code from '@/built/code-examples/api/with-dates-descending'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often need to order by date.  Below, we have some social media
      comments.  Let's order them with the most recent showing first.
      `}
    </p>
    <CodeBlock debugId="with-dates-descending/comments" jsTs={code.comments} />
  </>
)

export default Why
