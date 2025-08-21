import { Any, ArrayOf, CT, TAsync } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.async]
const name = 'pPassThrough'
const signatures = [
  () => (
    <>
      <TAsync />
      {` (value:${nbsp}`}
      <Any />
      {`,${nbsp}fnArray:${nbsp}`}
      <ArrayOf type="async function" />
      {`)${nbsp}=> `}
      <CT name="Result" content="result of the last function" />
    </>
  ),
]
const srcDir = 'async'

export { labels, name, signatures, srcDir }
