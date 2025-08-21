'use client'

import cn from 'classnames'
import queryString from 'query-string'
import { useCallback, useMemo } from 'react'
import useSmoothScrollTo from '@/hooks/use-smooth-scroll-to'
import useShow from './use-show'

import './index.scss'

const SubNav = ({ className, anchors, ...restProps }) => {
  const show = useShow()
  const smoothScrollTo = useSmoothScrollTo()
  const handleScrollTo = useCallback(
    async evt => {
      const anchor = queryString.parse(evt.target.getAttribute('href'))[
        'scroll-to'
      ]
      smoothScrollTo(document.getElementById(anchor))
    },
    [smoothScrollTo]
  )

  const links = useMemo(() => {
    return anchors.map(({ id, text }) => (
      <li key={id}>
        <a onClick={handleScrollTo} href={`#scroll-to=${id}`}>
          {text}
        </a>
      </li>
    ))
  }, [anchors, handleScrollTo])

  /**
   * The wrapper is necessary for collapsing the sub-nav i.e. the wrapper
   * transitions between 240px <---> 0, but sub-nav-content always stays at
   * 240px;
   */
  return (
    <div className={cn('sub-nav', className, { show })} {...restProps}>
      <div className="sub-nav-content">
        <h3>Contents</h3>
        <nav>
          <ul role="list">{links}</ul>
        </nav>
      </div>
    </div>
  )
}

export default SubNav
