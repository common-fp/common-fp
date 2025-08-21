import { Nullish } from '@/cmpt/inline-types'
import code from '@/built/code-examples/api/default-nullish-val-to'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Return a default value if a <Nullish /> one is passed.
    </p>
  ),
}

export default what
