import code from '@/built/code-examples/api/m-set-at-path'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to set a deep property. Below, we built a website
      allowing users to choose between light and dark modes.  Let's set the
      account preference to dark.
      `}
    </p>
    <CodeBlock debugId="m-set-at-path/preference" jsTs={code.preference} />
  </>
)

export default Why
