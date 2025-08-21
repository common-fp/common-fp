import code from '@/built/code-examples/api/get-size'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need the size of a collection.  Below, we're planning a field
      trip and need the total number of students.  Let's get the size of each
      class and sum them.
      `}
    </p>
    <CodeBlock debugId="get-size/students" jsTs={code.students} />
  </>
)

export default Why
