import { Falsey } from '@/cmpt/inline-types'
import code from '@/built/code-examples/api/default-falsey-val-to'

const what = {
  example: code.minimal,
  Description: () => (
    <p>
      Return a default value if a <Falsey /> one is passed.
    </p>
  ),
}

export default what
