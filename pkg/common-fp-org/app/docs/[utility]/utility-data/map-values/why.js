import code from '@/built/code-examples/api/map-values'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      We often want to change the values of a collection.  Below, we're
      organizing a conference.  We have a list of attendees and need their first
      names for name tags.  Let's map the attendees to their first names.
      `}
    </p>
    <CodeBlock debugId="map-values/conference" jsTs={code.conference} />
  </>
)

export default Why
