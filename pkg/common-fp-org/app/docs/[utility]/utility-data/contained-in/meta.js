import { Any, TBoolean, Collection, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.any]
const name = 'containedIn'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <TString />
      {`)${nbsp}=> (value:${nbsp}`}
      <TString />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
  () => (
    <>
      {`(collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> (value:${nbsp}`}
      <Any />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]

export { labels, name, signatures }
