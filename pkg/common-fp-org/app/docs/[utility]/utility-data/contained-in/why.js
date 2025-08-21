import code from '@/built/code-examples/api/contained-in'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often want to see if a value is in a collection.  Below, we see if a
      student is in the classroom.
      `}
    </p>
    <CodeBlock debugId="contained-in/students" jsTs={code.students} />
  </>
)

export default Why
