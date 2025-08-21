import code from '@/built/code-examples/api/append-all'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      This is useful when we want to concatenate two arrays.  Below, we create a
      list of all students by appending new students to the existing list.
      `}
    </p>
    <CodeBlock debugId="append-all/students" jsTs={code.students} />
  </>
)

export default Why
