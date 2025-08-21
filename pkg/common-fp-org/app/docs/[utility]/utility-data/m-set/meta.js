import { Any, PropertyKey } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.mutable]
const name = 'mSet'
const signatures = [
  () => (
    <>
      {`(key:${nbsp}`}
      <PropertyKey />
      {`, value:${nbsp}`}
      <Any />
      {`)${nbsp}=> (anything:${nbsp}`}
      <Any />
      {`)${nbsp}=> anything`}
    </>
  ),
]
const srcDir = 'mutable'

export { labels, name, signatures, srcDir }
