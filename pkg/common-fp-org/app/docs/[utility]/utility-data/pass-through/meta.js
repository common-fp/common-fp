import { Any, ArrayOf, CT } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'passThrough'
const signatures = [
  () => (
    <>
      {`(value:${nbsp}`}
      <Any />
      {`,${nbsp}fnArray:${nbsp}`}
      <ArrayOf type="function" />
      {`)${nbsp}=> `}
      <CT name="Result" content="result of the last function" />
    </>
  ),
]

export { labels, name, signatures }
