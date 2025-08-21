import code from '@/built/code-examples/api/negate'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want the opposite of a predicate.  Below, we are writing a
      plugin for a chat API.  We want to show a tooltip when a user cannot be
      messaged. Let's negate
      `}
      <InlineCode>canMessage</InlineCode>
      {`
        and update the users with our tooltip.
      `}
    </p>
    <CodeBlock debugId="negate/chat" jsTs={code.chat} />
  </>
)

export default Why
