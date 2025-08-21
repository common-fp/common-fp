import { Collection, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Collection]
const name = 'joinValues'
const signatures = [
  () => (
    <>
      {`(separator:${nbsp}`}
      <TString />
      {`) => (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <TString />
    </>
  ),
]

export { labels, name, signatures }
