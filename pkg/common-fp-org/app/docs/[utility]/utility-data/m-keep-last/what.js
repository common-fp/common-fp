import code from '@/built/code-examples/api/m-keep-last'
import InlineCode from '@/cmpt/inline-code'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Keep the last <InlineCode>num</InlineCode> elements of an array
      </p>
      <MutableNote argName="anArray" utilityName="keepLast" />
    </>
  ),
}

export default what
