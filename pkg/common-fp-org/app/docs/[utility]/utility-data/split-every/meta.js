import { TNumber, Sequence } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.chunk'], l.data.Sequence]
const name = 'splitEvery'
const signatures = [
  () => (
    <>
      {`(groupSize:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> (sequence:${nbsp}`}
      <Sequence />
      {`)${nbsp}=> `}
      <Sequence />
      []
    </>
  ),
]

export { labels, name, signatures }
