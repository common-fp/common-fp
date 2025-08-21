import { TNumber, Sequence } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.drop'], l.data.Sequence]
const name = 'discardFirst'
const signatures = [
  () => (
    <>
      {`(num:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> (sequence:${nbsp}`}
      <Sequence />
      {`)${nbsp}=> `}
      <Sequence />
    </>
  ),
]

export { labels, name, signatures }
