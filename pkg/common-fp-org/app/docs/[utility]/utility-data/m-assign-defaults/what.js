import { KeyedCollection } from '@/cmpt/inline-types'
import code from '@/built/code-examples/api/m-assign-defaults'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      Assign a <KeyedCollection /> over defaults.
      <MutableNote argName="base" utilityName="assignDefaults" />
    </>
  ),
}

export default what
