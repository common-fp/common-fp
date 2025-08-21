import InlineUtility from '@/cmpt/inline-utility'

const Notes = () => (
  <>
    <p>
      {`
      This utility does not treat Maps differently.  It only gets object
      properties.  If you're looking to get the value out of a map, use
      `}
      <InlineUtility name="getValueAtMapKey" />.
    </p>
  </>
)

export default Notes
