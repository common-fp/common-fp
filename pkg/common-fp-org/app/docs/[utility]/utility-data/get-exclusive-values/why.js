import code from '@/built/code-examples/api/get-exclusive-values'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we have a list of grouped values and only want those that appear
      in a single group. Below, we work for a dating app and are figuring out
      how many people are in a single relationship.  Let's find out.
      `}
    </p>
    <CodeBlock debugId="get-exclusive-values/exclusive" jsTs={code.exclusive} />
  </>
)

export default Why
