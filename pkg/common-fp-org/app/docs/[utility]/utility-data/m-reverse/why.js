import code from '@/built/code-examples/api/m-reverse'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to mutate an array by reversing it. Below, we run an
      email provider.  Some customers prefer their newest emails to be displayed
      last.  Let's implement this preference by reversing the emails.
      `}
    </p>
    <CodeBlock debugId="m-reverse/email" jsTs={code.email} />
  </>
)

export default Why
