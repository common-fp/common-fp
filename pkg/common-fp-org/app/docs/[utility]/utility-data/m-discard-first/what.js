import code from '@/built/code-examples/api/m-discard-first'
import InlineCode from '@/cmpt/inline-code'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Discard the first <InlineCode>num</InlineCode> values
      </p>
      <MutableNote argName="anArray" utilityName="discardFirst" />
    </>
  ),
}

export default what
