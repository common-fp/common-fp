/**
 * I'm trying this out as a way to hint to the user of clickable text
 * without underlines.
 */

import InfoIcon from '@/icons/info'

import './clickable-hint.scss'

const ClickableHint = ({ children, text, iconPosition, iconProps = {} }) => {
  const pos = iconPosition || 'after'
  return (
    <span className="clickable-hint">
      {pos === 'before' && <InfoIcon className="pos-before" {...iconProps} />}
      {text || children}
      {pos !== 'before' && <InfoIcon className="pos-after" {...iconProps} />}
    </span>
  )
}

export default ClickableHint
