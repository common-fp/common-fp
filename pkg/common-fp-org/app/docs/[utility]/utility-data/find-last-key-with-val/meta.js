import { Any, Either, TNumber, Sequence, TUndefined } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['[].lastIndexOf'], l.data.Sequence]
const name = 'findLastKeyWithVal'
const signatures = [
  () => (
    <>
      {`(value:${nbsp}`}
      <Any />
      {`)${nbsp}=> (sequence:${nbsp}`}
      <Sequence />
      {`)${nbsp}=> `}
      <Either arr={[TNumber, TUndefined]} />
    </>
  ),
]

export { labels, name, signatures }
