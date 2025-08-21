import code from '@/built/code-examples/api/get-value-at-map-key'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need a map's value.  Below, we're programming a new screen
      for New York metro (MTA) users.  We need to display their balance and
      status. MTA stores data in separate tables with the person's object as the
      key.  To test the screen, let's get Tom's data.
      `}
    </p>
    <CodeBlock debugId="get-value-at-map-key/metro" jsTs={code.metro} />
  </>
)

export default Why
