import { TBoolean, TDate, IsBetweenOpts } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.date]
const name = 'dateIsBetween'
const signatures = [
  () => (
    <>
      {`(date1:${nbsp}`}
      <TDate />
      {`, date2:${nbsp}`}
      <TDate />
      {`, opts?:${nbsp}`}
      <IsBetweenOpts />
      {`)${nbsp}=> (aDate:${nbsp}`}
      <TDate />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]
const srcDir = 'date'

export { labels, name, signatures, srcDir }
