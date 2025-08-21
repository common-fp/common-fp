import code from '@/built/code-examples/api/get-random-value'
import { TUndefined } from '@/cmpt/inline-types'

const what = {
  example: code.minimal,
  Description: () => {
    return (
      <>
        <p>Return a random value in the collection.</p>
        <p>
          If the collection is empty, <TUndefined /> is returned.
        </p>
      </>
    )
  },
}

export default what
