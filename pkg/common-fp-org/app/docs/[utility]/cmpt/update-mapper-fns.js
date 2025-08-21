import { CT } from '@/cmpt/inline-types'
import InlineCode from '@/cmpt/inline-code'

import './update-mapper-fns.scss'

const UpdateMapperFns = () => (
  <CT name="MapperFns">
    <p>An EntryCollection of functions.</p>
    <p>i.e. an object, map or array of functions, each with the signature</p>
    <InlineCode
      className="mapper-fns-signature"
      content="(value, key, collection) => updatedValue"
    />
  </CT>
)

export default UpdateMapperFns
