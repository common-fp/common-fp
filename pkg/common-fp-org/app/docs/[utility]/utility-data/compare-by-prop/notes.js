import InlineCode from '@/cmpt/inline-code'

const compareByProp = <InlineCode>compareByProp</InlineCode>
const compareFn = <InlineCode>compareFn</InlineCode>
const inTheSpec = (
  <a target="_blank" href="https://tc39.es/ecma262/#sec-comparearrayelements">
    in the spec
  </a>
)

const Notes = () => (
  <>
    <p>
      Undefined properties are handled by {compareByProp} as defined {inTheSpec}
      , so {compareFn} will not need to handle them.
    </p>
  </>
)

export default Notes
