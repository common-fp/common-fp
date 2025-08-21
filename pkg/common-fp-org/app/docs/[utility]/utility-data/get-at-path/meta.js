import { Any, PropertyKey } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.any]
const name = 'getAtPath'
const signatures = [
  () => (
    <>
      {`(path:${nbsp}`}
      <PropertyKey />
      {`[])${nbsp}=> (anything:${nbsp}`}
      <Any />
      {`)${nbsp}=> `}
      <Any />
    </>
  ),
]

export { labels, name, signatures }
