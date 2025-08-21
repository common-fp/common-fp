import cn from 'classnames'

import './button.scss'

const Button = props => {
  const { children, className, primary, ...restProps } = props

  return (
    <button className={cn('cfp-button', className, { primary })} {...restProps}>
      <span className="content">{children}</span>
    </button>
  )
}

export default Button
