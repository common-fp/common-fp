import { Sequence, TNumber } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.takeRight'], l.data.Sequence]
const name = 'keepLast'
const signatures = [
  () => (
    <>
      {`(num:${nbsp}`}
      <TNumber />
      {`) => (sequence:${nbsp}`}
      <Sequence />
      {`)${nbsp}=> `}
      <Sequence />
    </>
  ),
]

export { labels, name, signatures }
