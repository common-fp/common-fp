import { Collection, TNumber } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.Collection]
const name = 'randomlyKeep'
const signatures = [
  () => (
    <>
      {`(num:${nbsp}`}
      <TNumber />
      {`) => (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Collection />
    </>
  ),
]

export { labels, name, signatures }
