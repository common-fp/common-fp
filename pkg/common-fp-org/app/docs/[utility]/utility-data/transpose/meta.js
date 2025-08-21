import { Any } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.zip']]
const name = 'transpose'
const signatures = [
  () => (
    <>
      {`(anArray:${nbsp}`}
      <Any />
      {`[][])${nbsp}=> `}
      <Any />
      {`[][]`}
    </>
  ),
]

export { labels, name, signatures }
