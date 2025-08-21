import { KeyedCollection } from '@/cmpt/inline-types'
import code from '@/built/code-examples/api/assign-overrides'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Assign an <InlineCode>overrides</InlineCode> <KeyedCollection /> over
      another.
    </p>
  ),
}

export default what
