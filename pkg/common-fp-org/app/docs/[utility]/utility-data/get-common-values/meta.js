import { TArray, ValueCollection } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const labels = [l.aka['_.intersection']]
const name = 'getCommonValues'
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
