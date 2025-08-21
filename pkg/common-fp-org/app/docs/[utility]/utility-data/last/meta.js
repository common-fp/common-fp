import { CT, Sequence } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Sequence]
const name = 'last'
const signatures = [
  () => (
    <>
      {`(sequence:${nbsp}`}
      <Sequence />
      {`)${nbsp}=> `}
      <CT name="Value" content="i.e. sequence.at(-1)" />
    </>
  ),
]

export { labels, name, signatures }
