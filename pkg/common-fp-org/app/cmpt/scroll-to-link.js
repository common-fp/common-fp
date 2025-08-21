'use client'

import cn from 'classnames'
import useScrollAndUpdateUrl from '@/hooks/use-scroll-and-update-url'

import './scroll-to-link.scss'

const ScrollToLink = props => {
  const { children, className, scrollToId } = props
  const scrollAndUpdateUrl = useScrollAndUpdateUrl(scrollToId)

  return (
    <a
      href="#"
      className={cn('scroll-to-link', className)}
      onClick={scrollAndUpdateUrl}
    >
      {children}
    </a>
  )
}

export default ScrollToLink
