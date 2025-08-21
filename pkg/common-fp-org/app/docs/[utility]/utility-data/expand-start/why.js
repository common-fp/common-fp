import code from '@/built/code-examples/api/expand-start'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want a string to have a certain length.  Below, we normalize
      file IDs so they sort as expected.
      `}
    </p>
    <CodeBlock debugId="expand-start/file-id" jsTs={code.fileId} />
  </>
)

export default Why
