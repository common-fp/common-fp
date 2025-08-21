import code from '@/built/code-examples/api/m-fill-with'
import InlineCode from '@/cmpt/inline-code'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Fill a collection with <InlineCode>value</InlineCode>
      </p>
      <MutableNote argName="collection" utilityName="fillWith" />
    </>
  ),
}

export default what
