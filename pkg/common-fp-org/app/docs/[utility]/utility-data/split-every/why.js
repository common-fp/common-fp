import code from '@/built/code-examples/api/split-every'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to split a sequence into groups of a size. Below, we
      have a list of students. We're splitting them up into groups of 3 for a
      class project.  Let's make the groups.
      `}
    </p>
    <CodeBlock debugId="split-every/groups" jsTs={code.groups} />
  </>
)

export default Why
