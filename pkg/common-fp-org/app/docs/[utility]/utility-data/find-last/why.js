import code from '@/built/code-examples/api/find-last'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to find the last value that passes a condition.  Below,
      we have some of Jim Carrey's oldest films ordered by release date.  Let's
      find his oldest film, which wasn't a comedy.
      `}
    </p>
    <CodeBlock debugId="find-last/movies" jsTs={code.movies} />
  </>
)

export default Why
