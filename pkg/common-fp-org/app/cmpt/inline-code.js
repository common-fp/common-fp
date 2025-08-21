import cn from 'classnames'

import './inline-code.scss'

const InlineCode = ({ children, className, content }) => (
  <code className={cn(className, 'inline-code')}>{content || children}</code>
)

export default InlineCode
