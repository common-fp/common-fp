import { CT, TNumber, TString } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

import './meta.scss'

const Precision = () => (
  <CT name="Precision">
    A <TString /> in one of two formats
    <dl className="precision-formats">
      <dt>decimal</dt>
      <dd>
        {`'0.{up to 9 zeroes}1'`}
        <br />
        {`such as '0.1' or '0.00001'`}
      </dd>

      <dt>integer</dt>
      <dd>
        {`'1{up to 9 zeroes}'`}
        <br />
        {`such as '1' or '10000'`}
      </dd>
    </dl>
  </CT>
)

const labels = [l.data.number]
const name = 'roundToNearest'
const signatures = [
  () => (
    <>
      {`(precision:${nbsp}`}
      <Precision />
      {`)${nbsp}=> (aNumber:${nbsp}`}
      <TNumber />
      {`)${nbsp}=> `}
      <TNumber />
    </>
  ),
]

export { labels, name, signatures }
