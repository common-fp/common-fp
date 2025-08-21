import { KeyedCollection } from '@/cmpt/inline-types'
import code from '@/built/code-examples/api/m-assign-overrides'
import InlineCode from '@/cmpt/inline-code'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      Assign <InlineCode>overrides</InlineCode> over a <KeyedCollection />.
      <MutableNote argName="base" utilityName="assignOverrides" />
    </>
  ),
}

export default what
