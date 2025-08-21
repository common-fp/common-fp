'use client'

import { AnimatePresence, motion } from 'motion/react'
import { transitionDurSeconds } from '@/utils/style-variables'

const noPosition = { initial: {}, animate: {} }
const positionByFrom = getPositionByFrom()

const Appear = ({ children, className, from, when, ref }) => {
  const position = positionByFrom[from] || noPosition
  return (
    <AnimatePresence>
      {when && (
        <motion.div
          className={className}
          initial={{ opacity: 0, ...position.initial }}
          animate={{ opacity: 1, ...position.animate }}
          exit={{ opacity: 0, ...position.initial }}
          transition={{ duration: transitionDurSeconds }}
          ref={ref}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function getPositionByFrom() {
  return {
    top: {
      initial: { y: '-50px' },
      animate: { y: '0px' },
    },
    bottom: {
      initial: { y: '50px' },
      animate: { y: '0px' },
    },
    left: {
      initial: { x: '-50px' },
      animate: { x: '0px' },
    },
    right: {
      initial: { x: '50px' },
      animate: { x: '0px' },
    },
  }
}

export default Appear
