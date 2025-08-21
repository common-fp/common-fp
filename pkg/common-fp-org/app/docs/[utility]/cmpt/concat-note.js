import code from '@/built/code-examples/misc'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const ConcatNote = () => (
  <>
    <p>
      {`There's no `}
      <InlineCode>concat</InlineCode>
      {`
      utility in Common FP.  This is intentional, as I feel javascript's concat
      is unintuitive.  Specifically, that it works on both values and arrays.
      For example:
      `}
    </p>
    <CodeBlock debug="append-all/concat" jsTs={code.concat} />
  </>
)

export default ConcatNote
