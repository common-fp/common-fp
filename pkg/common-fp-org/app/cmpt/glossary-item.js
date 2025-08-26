import cn from 'classnames'
import './glossary-item.scss'

const GlossaryItem = ({ children, className, id, text }) => (
  <a
    className={cn('glossary-item', className)}
    href={`/glossary#scroll-to=${id}`}
    target="_blank"
  >
    {text || children}
  </a>
)

export default GlossaryItem
