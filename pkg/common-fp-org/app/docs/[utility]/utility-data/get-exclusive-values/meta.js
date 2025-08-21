import { TArray, ValueCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'

const labels = []
const name = 'getExclusiveValues'
const signatures = [
  () => (
    <>
      {`(anArray:${nbsp}`}
      <ValueCollection />
      {`[])${nbsp}=> `}
      <TArray />
    </>
  ),
]

export { labels, name, signatures }
