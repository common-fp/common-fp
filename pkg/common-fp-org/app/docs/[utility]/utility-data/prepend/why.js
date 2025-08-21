import code from '@/built/code-examples/api/prepend'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to prepend a string.  Below, let's get the full paths of
      the files in our current directory.
      `}
    </p>
    <CodeBlock debugId="prepend/files" jsTs={code.files} />
  </>
)

export default Why
