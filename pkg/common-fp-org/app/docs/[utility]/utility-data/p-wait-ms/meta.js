import { TAsync, TNumber, TUndefined } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.async]
const name = 'pWaitMs'
const signatures = [
  () => (
    <>
      <TAsync />
      {`${nbsp}(ms:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> `}
      <TUndefined />
    </>
  ),
]

export { labels, name, signatures }
