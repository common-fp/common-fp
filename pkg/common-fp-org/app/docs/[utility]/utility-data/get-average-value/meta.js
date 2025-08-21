import { CNumbers, Either, TNumber, TUndefined } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'getAverageValue'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <CNumbers />
      {`[])${nbsp}=> `}
      <Either arr={[TNumber, TUndefined]} />
    </>
  ),
]

export { labels, name, signatures }
