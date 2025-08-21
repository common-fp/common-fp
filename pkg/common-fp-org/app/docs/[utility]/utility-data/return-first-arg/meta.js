import { Any } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.identity'], l.data.any]
const name = 'returnFirstArg'
const signatures = [
  () => (
    <>
      {`(arg:${nbsp}`}
      <Any />
      {`)${nbsp}=> arg`}
    </>
  ),
]

export { labels, name, signatures }
