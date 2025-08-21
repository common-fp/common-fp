import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const UpdateNotes = ({ jsTs }) => (
  <>
    <p>
      An array or map of <InlineCode content="mapperFns" /> can only update a
      respective array or map. An object, on the other hand, can update any
      EntryCollection.
    </p>
    <p>Below shows the array validation.</p>
    <CodeBlock debugId="update/notes" jsTs={jsTs} />
  </>
)

export default UpdateNotes
