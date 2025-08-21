import code from '@/built/code-examples/api/m-discard-last'
import InlineCode from '@/cmpt/inline-code'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Discard the last <InlineCode>num</InlineCode> values
      </p>
      <MutableNote argName="anArray" utilityName="discardLast" />
    </>
  ),
}

export default what
