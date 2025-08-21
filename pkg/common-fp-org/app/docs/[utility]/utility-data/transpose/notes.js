import code from '@/built/code-examples/api/transpose'
import CodeBlock from '@/cmpt/code-block'

const Notes = () => (
  <>
    <p>Transpose requires the sub-arrays to have equal length</p>
    <CodeBlock
      debugId="transpose/different-lengths"
      jsTs={code.differentLengths}
    />
  </>
)

export default Notes
