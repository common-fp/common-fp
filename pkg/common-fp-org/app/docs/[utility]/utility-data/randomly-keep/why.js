import code from '@/built/code-examples/api/randomly-keep'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
        Sometimes we want to randomly pick items.  Below, we have a classroom
        with a dirty chalkboard.  Every day the teacher randomly picks two
        students to clean it.  Let's pick them.
      `}
    </p>
    <CodeBlock debugId="randomly-keep/chalkboard" jsTs={code.chalkboard} />
  </>
)

export default Why
