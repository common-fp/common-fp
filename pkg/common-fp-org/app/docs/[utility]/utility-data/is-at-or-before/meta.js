import { TBoolean, TDate } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.date]
const name = 'isAtOrBefore'
const signatures = [
  () => (
    <>
      {`(date1:${nbsp}`}
      <TDate />
      {`)${nbsp}=> (date2:${nbsp}`}
      <TDate />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]
const srcDir = 'date'

export { labels, name, signatures, srcDir }
