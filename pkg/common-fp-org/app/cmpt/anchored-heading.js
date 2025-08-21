'use client'

import cn from 'classnames'
import useScrollAndUpdateUrl from '@/hooks/use-scroll-and-update-url'

import './anchored-heading.scss'

const AnchoredHeading = props => {
  const { id, className, level, text } = props
  const scrollAndUpdateUrl = useScrollAndUpdateUrl(id)
  const Heading = `h${level}`

  return (
    <Heading
      id={id}
      className={cn('anchored-heading', className)}
      onClick={scrollAndUpdateUrl}
    >
      <span className="text">{text}</span>
      <span className="hashtag">#</span>
    </Heading>
  )
}

export default AnchoredHeading
