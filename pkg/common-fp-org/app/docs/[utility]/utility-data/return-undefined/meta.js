import { TUndefined } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.noop']]
const name = 'returnUndefined'
const signatures = [
  () => (
    <>
      {`()${nbsp}=> `}
      <TUndefined />
    </>
  ),
]

export { labels, name, signatures }
