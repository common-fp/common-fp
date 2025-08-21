import cn from 'classnames'

const ContentFrame = ({ children, className }) => (
  <div className={cn('content-frame', className)}>{children}</div>
)

export default ContentFrame
