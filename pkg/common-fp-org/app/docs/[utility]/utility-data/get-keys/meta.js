import { ArrayOf, CT, EntryCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

import './meta.scss'

const Keys = () => (
  <CT name="Keys">
    {`Depends on the collection passed in`}
    <dl className="keys-per-collection">
      <dt>object</dt>
      <dd>
        <ArrayOf type="string" />
      </dd>

      <dt>map</dt>
      <dd>
        <ArrayOf type="any" />
      </dd>

      <dt>array</dt>
      <dd>
        <ArrayOf type="number" />
      </dd>
    </dl>
  </CT>
)

const labels = [l.data.EntryCollection]
const name = 'getKeys'
const signatures = [
  () => (
    <>
      {`(collection:${nbsp}`}
      <EntryCollection />
      {`)${nbsp}=> `}
      <Keys />
    </>
  ),
]

export { labels, name, signatures }
