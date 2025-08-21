import code from '@/built/code-examples/api/number-is-between'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      We often want to see if a number falls within a range. Below, we see if
      Amy, Kim, and Grace get the teen discount at the movies.
    </p>
    <CodeBlock debugId="number-is-between/movies" jsTs={code.movies} />
  </>
)

export default Why
