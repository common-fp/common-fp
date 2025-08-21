import InlineUtility from '@/cmpt/inline-utility'
import InfoNote from '@/docs/[utility]/cmpt/info-note'

const ComposableNote = ({ justLike, utility }) => (
  <InfoNote>
    Just like <InlineUtility name={justLike} />, {utility} gives us a flexible
    and readable way to combine logic.
    {`
    It's one of the big reasons I find functional programming to be helpful.
    `}
  </InfoNote>
)

export default ComposableNote
