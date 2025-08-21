import cn from 'classnames'

import './info-note.scss'

const InfoNote = ({ children, className }) => (
  <p className={cn('info-note', className)}>{children}</p>
)

export default InfoNote
