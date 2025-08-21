import code from '@/built/code-examples/api/get-common-values'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we have a list of grouped values and want those found in all the
      groups.  Below, we want to schedule a morning meeting with Liz, Phil, and
      Mary.  Using their available hours, let's find potential meeting times.
      `}
    </p>
    <CodeBlock debugId="get-common-values/available" jsTs={code.available} />
  </>
)

export default Why
