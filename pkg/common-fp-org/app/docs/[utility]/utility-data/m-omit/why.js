import code from '@/built/code-examples/api/m-omit'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to remove entries by key. Below, we have employees in
      our print design department.  Jason and Amy are moving to web design, so
      let's remove them from our records and wish them luck :)
      `}
    </p>
    <CodeBlock debugId="m-omit/employees" jsTs={code.employees} />
  </>
)

export default Why
