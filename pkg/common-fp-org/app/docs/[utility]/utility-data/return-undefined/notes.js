import InlineCode from '@/cmpt/inline-code'
import { nbsp } from '@/utils'

const Notes = () => (
  <>
    <p>
      This function is more commonly known as <InlineCode content="noop" />
      {`
        which stands for "no${nbsp}operation." More intuitively, we can think of
        the function as "do${nbsp}nothing." Typically, you'll see it used in
        libraries that take a callback, which does nothing by default.
      `}
    </p>
  </>
)

export default Notes
