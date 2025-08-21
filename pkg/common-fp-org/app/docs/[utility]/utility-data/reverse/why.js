import code from '@/built/code-examples/api/reverse'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we have ordered data and want to reverse it. Below, we run an
      email provider.  Some customers prefer their newest emails to be displayed
      last.  Let's implement this preference by reversing the emails.
      `}
    </p>
    <CodeBlock debugId="reverse/email" jsTs={code.email} />
  </>
)

export default Why
