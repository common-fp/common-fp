import code from '@/built/code-examples/api/group-by'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to place values into groups.  Below, we work for a jet
      ski rental company.  Let's split our jet skis into classes of 'beginner'
      and 'proficient.'
      `}
    </p>
    <CodeBlock debugId="group-by/jet-skis" jsTs={code.jetSkis} />
  </>
)

export default Why
