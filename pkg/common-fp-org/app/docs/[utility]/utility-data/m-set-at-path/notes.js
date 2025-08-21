import code from '@/built/code-examples/api/m-set-at-path'
import CodeBlock from '@/cmpt/code-block'

const Notes = () => (
  <>
    <p>This utility has a few requirements</p>
    <ul>
      <li>Path must have at least one element</li>
      <li>Path must exist on the object and be assignable</li>
    </ul>
    <p>The example shows the errors thrown for each requirement</p>
    <CodeBlock debugId="m-set-at-path/errors" jsTs={code.errors} />
  </>
)

export default Notes
