import code from '@/built/code-examples/api/truncate-to-n-chars'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to limit the number of characters while indicating
      there's more.  Below, we are coding a text notification for our phone.
      Let's make sure the notification has at most 50 characters.
      `}
    </p>
    <CodeBlock
      debugId="truncate-to-n-chars/notification"
      jsTs={code.notification}
    />
  </>
)

export default Why
