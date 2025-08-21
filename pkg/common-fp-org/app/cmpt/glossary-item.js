import cn from 'classnames'
import './glossary-item.scss'

const GlossaryItem = ({ className, id, text }) => (
  <a
    className={cn('glossary-item', className)}
    href={`/glossary#scroll-to=${id}`}
    target="_blank"
  >
    {text}
  </a>
)

export default GlossaryItem
