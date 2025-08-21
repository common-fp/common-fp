import { ArrayOf, CT, TFunction } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const Result = () => <CT name="Result" content="result of fn" />

const labels = [l.data.function]
const name = 'invokeWith'
const signatures = [
  () => (
    <>
      {`(args:${nbsp}`}
      <ArrayOf type="any" />
      {`)${nbsp}=> (fn:${nbsp}`}
      <TFunction />
      {`)${nbsp}=> `}
      <Result />
    </>
  ),
]

export { labels, name, signatures }
