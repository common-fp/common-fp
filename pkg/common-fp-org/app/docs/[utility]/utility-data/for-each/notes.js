import GlossaryItem from '@/cmpt/glossary-item'
import InlineCode from '@/cmpt/inline-code'

const Why = () => (
  <>
    <p>
      <InlineCode>forEach</InlineCode> is intended for{' '}
      <GlossaryItem
        className="always-underlined"
        id="side-effects"
        text="side effects"
      />
      .
      {`
      If you're using this to modify the collection then you're likely
      misunderstanding Common-FP.  Please raise a question on github so we can
      figure out a better approach for ya.
      `}
    </p>
  </>
)

export default Why
