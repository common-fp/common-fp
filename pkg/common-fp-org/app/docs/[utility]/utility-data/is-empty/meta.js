import { Collection, Either, TBoolean, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.CollectionOrString]
const name = 'isEmpty'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <Either arr={[Collection, TString]} />
      {`)${nbsp}=> `}
      <TBoolean />
    </>
  ),
]

export { labels, name, signatures }
