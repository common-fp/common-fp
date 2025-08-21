import { CT, Sequence } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.head'], l.data.Sequence]
const name = 'first'
const signatures = [
  () => (
    <>
      {`(sequence:${nbsp}`}
      <Sequence />
      {`)${nbsp}=> `}
      <CT name="Value" content="i.e. sequence[0]" />
    </>
  ),
]

export { labels, name, signatures }
