import { ArrayOf, CT, TAsync } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['a.seq'], l.async]
const name = 'pCompose'
const signatures = [
  () => (
    <>
      {`(fnArray:${nbsp}`}
      <ArrayOf type="async function" />
      {`)${nbsp}=> `}
      <TAsync />
      {`${nbsp}(...args:${nbsp}`}
      <ArrayOf type="any" />
      {`)${nbsp}=> `}
      <CT name="Result" content="result of the last function" />
    </>
  ),
]
const srcDir = 'async'

export { labels, name, signatures, srcDir }
