import code from '@/built/code-examples/api/m-prepend-one'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to mutate an array by prepending a value. Below, we run
      a sandwich shop and have prep instructions.  Apparently people aren't
      washing their hands and putting gloves on, so let's prepend that step as
      a reminder.
      `}
    </p>
    <CodeBlock debugId="m-prepend-one/prep" jsTs={code.prep} />
  </>
)

export default Why
