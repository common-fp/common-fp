import code from '@/built/code-examples/api/is-at-or-before'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need to compare dates. Below, we want to clean up our email.
      Let's archive any that are at least a year old.
      `}
    </p>
    <CodeBlock
      debugId="is-at-or-before/email-archive"
      jsTs={code.emailArchive}
    />
  </>
)

export default Why
