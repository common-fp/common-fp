import { TBoolean, TNumber, IsBetweenOpts } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.number]
const name = 'numberIsBetween'
const signatures = [
  () => (
    <>
      {`(num1:${nbsp}`}
      <TNumber />
      {`, num2:${nbsp}`}
      <TNumber />
      {`, opts?:${nbsp}`}
      <IsBetweenOpts />
      {`)${nbsp}=> (aNumber:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]
const srcDir = 'number'

export { labels, name, signatures, srcDir }
