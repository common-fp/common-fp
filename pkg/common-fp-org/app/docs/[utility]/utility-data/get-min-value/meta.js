import { CNumbers, Either, TNumber, TUndefined } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Collection]
const name = 'getMinValue'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <CNumbers />
      {`)${nbsp}=> `}
      <Either arr={[TNumber, TUndefined]} />
    </>
  ),
]

export { labels, name, signatures }
