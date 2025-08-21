import cn from 'classnames'

import './inline-utility.scss'

const InlineUtility = ({ name }) => {
  const isMutableRe = /^m[A-Z]/
  const isMutable = isMutableRe.test(name)

  return (
    <a
      className={cn('inline-utility', { 'is-mutable': isMutable })}
      href={`/docs/${name}`}
      target="_blank"
    >
      {name}
    </a>
  )
}

export default InlineUtility
