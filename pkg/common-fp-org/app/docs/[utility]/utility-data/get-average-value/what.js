import { TUndefined } from '@/cmpt/inline-types'
import code from '@/built/code-examples/api/get-average-value'
import InfoNote from '@/docs/[utility]/cmpt/info-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Return the average</p>

      <InfoNote>
        Returns <TUndefined /> for empty collections.
      </InfoNote>
    </>
  ),
}

export default what
