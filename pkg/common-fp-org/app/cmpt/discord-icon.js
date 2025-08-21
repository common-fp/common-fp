import cn from 'classnames'
import WithSize from '@/hoc/with-size'

import './discord-icon.scss'

const DiscordIcon = WithSize(({ className, ...restProps }) => (
  <svg
    className={cn('icon discord-icon', className)}
    viewBox="0 0 100 100"
    {...restProps}
  >
    <path d="M84.7 18.2A83 83 0 0 0 64.3 12l-.3.1c-1 1.6-1.9 3.7-2.6 5.3a76 76 0 0 0-22.8 0Q37.4 14.6 36 12l-.3-.1a82 82 0 0 0-20.4 6.3l-.1.1a84 84 0 0 0-14.8 57l.1.2a83 83 0 0 0 25 12.6l.4-.1q2.9-4 5-8.3a.3.3 0 0 0-.1-.5q-4-1.5-7.8-3.7a.3.3 0 0 1 0-.5l1.5-1.2h.3a60 60 0 0 0 50.3 0h.3L77 75a.3.3 0 0 1 0 .5 51 51 0 0 1-7.9 3.7.3.3 0 0 0-.1.5q2.3 4.4 5 8.3l.4.1a83 83 0 0 0 25-12.6l.2-.3c2-21.5-3.5-40.3-14.8-56.9zM33.4 64c-5 0-9-4.5-9-10.1s4-10 9-10 9 4.5 9 10-4 10-9 10m33.2 0c-4.9 0-9-4.5-9-10.1s4-10 9-10 9.1 4.5 9 10-4 10-9 10" />
  </svg>
))

export default DiscordIcon
