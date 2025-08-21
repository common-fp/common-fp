import InlineCode from '@/cmpt/inline-code'
import InlineUtility from '@/cmpt/inline-utility'

import './mutable-note.scss'

const MutableNote = props => {
  const { argName, utilityName } = props

  const mutating = (
    <a target="_blank" href="/glossary#scroll-to=mutating-data">
      mutating
    </a>
  )

  return (
    <p className="mutable-note">
      Consider <InlineUtility name={utilityName} /> instead.
      <br />
      This is for the uncommon case where {mutating}{' '}
      <InlineCode>{argName}</InlineCode> is required.
    </p>
  )
}

export default MutableNote
