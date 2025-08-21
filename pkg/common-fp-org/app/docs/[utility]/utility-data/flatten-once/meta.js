import { TArray } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.data.array]
const name = 'flattenOnce'
const signatures = [
  () => (
    <>
      {`(anArray:${nbsp}`}
      <TArray />
      {`)${nbsp}=> `}
      <TArray />
    </>
  ),
]

const srcDir = 'array'

export { labels, name, signatures, srcDir }
