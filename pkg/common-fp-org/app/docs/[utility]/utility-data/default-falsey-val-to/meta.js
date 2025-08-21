import { Any } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.any]
const name = 'defaultFalseyValTo'
const signatures = [
  () => (
    <>
      {`(defaultVal:${nbsp}`}
      <Any />
      {`)${nbsp}=> (val:${nbsp}`}
      <Any />
      {`)${nbsp}=> `}
      <Any />
    </>
  ),
]

export { labels, name, signatures }
