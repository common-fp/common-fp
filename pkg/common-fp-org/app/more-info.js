'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useAnimate } from 'motion/react'
import Chevron from '@/cmpt/chevron'
import { waitAnimationDur } from '@/utils'
import makeLog from '@/utils/make-log'
import { transitionDurSeconds } from '@/utils/style-variables'

import './more-info.scss'

const MoreInfoCtx = createContext({ expanded: false, isAnimating: false })

const MoreInfo = ({ children }) => {
  const [expanded, setExpanded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const moreInfoRef = useRef(null)
  return (
    <MoreInfoCtx.Provider
      value={{
        expanded,
        isAnimating,
        moreInfoRef,
        setExpanded,
        setIsAnimating,
      }}
    >
      <div ref={moreInfoRef} className="more-info">
        {children}
      </div>
    </MoreInfoCtx.Provider>
  )
}

const MoreInfoMain = ({ children }) => {
  const { expanded, isAnimating, setExpanded, setIsAnimating } =
    useContext(MoreInfoCtx)

  const toggleExpanded = async () => {
    if (!isAnimating) {
      setExpanded(!expanded)
      setIsAnimating(true)
      await waitAnimationDur()
      setIsAnimating(false)
    }
  }

  return (
    <button className="main" onClick={toggleExpanded}>
      <span className="content">{children}</span>{' '}
      <Chevron expanded={expanded} />
    </button>
  )
}

const MoreInfoDetails = ({ children }) => {
  const { expanded, moreInfoRef } = useContext(MoreInfoCtx)
  const [originalHeight, setOriginalHeight] = useState()
  const expandedState = useRef(false)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (expanded === expandedState.current) return

    expandedState.current = expanded

    const [detailsEl, moreInfoEl] = [scope.current, moreInfoRef.current]

    const expand = async () => {
      const oldHeight = moreInfoEl.offsetHeight + 'px'
      setOriginalHeight(oldHeight)
      detailsEl.style.display = 'block'
      const newHeight = moreInfoEl.offsetHeight + 'px'

      await animate(moreInfoEl, { height: [oldHeight, newHeight] })
      moreInfoEl.style.height = null
    }
    const contract = async () => {
      const curHeight = moreInfoEl.offsetHeight + 'px'

      await animate(
        moreInfoEl,
        { height: [curHeight, originalHeight] },
        { duration: transitionDurSeconds }
      )
      detailsEl.style.display = null
      moreInfoEl.style.height = null
    }

    const action = expanded ? 'expanding' : 'contracting'
    const logError = makeLog.withContext('error', `${action} Details`)
    const fn = expanded ? expand : contract
    fn().catch(logError)
  }, [animate, expanded, moreInfoRef, originalHeight, scope])

  return (
    <div ref={scope} className="details">
      {children}
    </div>
  )
}

export default MoreInfo
export { MoreInfoDetails, MoreInfoMain }
