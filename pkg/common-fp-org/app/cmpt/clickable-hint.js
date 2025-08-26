/**
 * I'm trying this out as a way to hint to the user of clickable text
 * without underlines.
 */

import InfoIcon from '@/icons/info'

import './clickable-hint.scss'

const ClickableHint = ({ children, text, iconPosition }) => {
  const pos = iconPosition || 'after'
  return (
    <span className="clickable-hint">
      {pos === 'before' && <InfoIcon className="pos-before" />}
      {text || children}
      {pos !== 'before' && <InfoIcon className="pos-after" />}
    </span>
  )
}

export default ClickableHint
