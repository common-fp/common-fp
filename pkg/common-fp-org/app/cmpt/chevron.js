import cn from 'classnames'

import './chevron.scss'

const Chevron = props => {
  const {
    className,
    expanded = false,
    height = '30px',
    horizontal = false,
    slow = false,
    width = props.height || '30px',
    ...restProps
  } = props

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 185.34 185.34"
      className={cn('chevron', className, {
        expanded,
        horizontal,
        vertical: !horizontal,
        slow,
      })}
      {...restProps}
    >
      <path d="m51.707 185.34c-2.741 0-5.493-1.044-7.593-3.149-4.194-4.194-4.194-10.981 0-15.175l74.352-74.347-74.352-74.352c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939c-2.093 2.1-4.84 3.15-7.587 3.15z" />
    </svg>
  )
}

export default Chevron
