import { Collection, Either, TNumber, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.CollectionOrString]
const name = 'getSize'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <Either arr={[Collection, TString]} />
      {`)${nbsp}=> `}
      <TNumber />
    </>
  ),
]

export { labels, name, signatures }
