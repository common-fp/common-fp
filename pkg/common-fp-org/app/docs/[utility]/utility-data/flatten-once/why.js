import code from '@/built/code-examples/api/flatten-once'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we have nested arrays and only want to flatten one level deep.
      Below, a doctor is examining the medical history of relatives and wants to
      limit her search to the patient's cousins.  Let's flatten the tree one
      level to do this.
      `}
    </p>
    <CodeBlock debugId="flatten-once/family" jsTs={code.family} />
  </>
)

export default Why
