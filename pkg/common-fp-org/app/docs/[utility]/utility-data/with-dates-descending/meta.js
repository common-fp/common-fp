import { TDate, TNumber } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'withDatesDescending'
const signatures = [
  () => (
    <>
      {`(left:${nbsp}`}
      <TDate />
      {`,${nbsp}right:${nbsp}`}
      <TDate />
      {`)${nbsp}=> `}
      <TNumber />
    </>
  ),
]

export { labels, name, signatures }
