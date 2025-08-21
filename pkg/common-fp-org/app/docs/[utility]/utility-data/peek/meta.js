import { Any, CT } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['r.tap'], l.data.any]
const name = 'peek'
const signatures = [
  () => (
    <>
      {`(fn:${nbsp}`}
      <CT name="PeekFn" content="value => void" />
      {`)${nbsp}=> (value:${nbsp}`}
      <Any />
      {`)${nbsp}=> value`}
    </>
  ),
]

export { labels, name, signatures }
