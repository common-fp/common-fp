import { Collection, CT } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const GroupedValues = () => {
  return <CT name="GroupedValues" content="{ [group key]: array of values }" />
}

const GroupingFn = () => (
  <CT name="GroupingFn" content="(value, key, collection) => key" />
)

const labels = [l.data.Collection]
const name = 'groupBy'
const signatures = [
  () => (
    <>
      {`(toGroup:${nbsp}`}
      <GroupingFn />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <GroupedValues />
    </>
  ),
]

export { labels, name, signatures }
