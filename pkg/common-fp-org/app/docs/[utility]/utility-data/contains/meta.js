import { Any, TBoolean, Collection, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.includes'], l.data.CollectionOrString]
const name = 'contains'
const signatures = [
  () => (
    <>
      {`(value:${nbsp}`}
      <TString />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Collection />
      {`${nbsp}|${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
  () => (
    <>
      {`(value:${nbsp}`}
      <Any />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]

export { labels, name, signatures }
