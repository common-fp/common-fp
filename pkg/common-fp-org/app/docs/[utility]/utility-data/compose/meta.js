import { ArrayOf, CT } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.flow']]
const name = 'compose'
const signatures = [
  () => (
    <>
      {`(fnArray:${nbsp}`}
      <ArrayOf type="function" />
      {`)${nbsp}=> `}
      {`(...args:${nbsp}`}
      <ArrayOf type="any" />
      {`)${nbsp}=> `}
      <CT name="Result" content="result of the last function" />
    </>
  ),
]

export { labels, name, signatures }
