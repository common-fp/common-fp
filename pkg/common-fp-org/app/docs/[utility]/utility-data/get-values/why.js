import code from '@/built/code-examples/api/get-values'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need the values of a collection.  Below, we have the most
      streamed shows per platform.  Let's flatten their values to list them all.
      `}
    </p>
    <CodeBlock debugId="get-values/popular-shows" jsTs={code.popularShows} />
  </>
)

export default Why
