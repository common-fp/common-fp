import { TFunction } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.function]
const name = 'swapFirstTwoArgs'
const signatures = [
  () => (
    <>
      {`(fn:${nbsp}`}
      <TFunction />
      {`)${nbsp}=> `}
      <TFunction />
    </>
  ),
]

export { labels, name, signatures }
