import cn from 'classnames'
import { useCallback } from 'react'
import Tooltip, { TooltipActivator, TooltipContent } from '@/cmpt/tooltip'
import LabelTooltipContent from './label-tooltip-content'

import './one-label.scss'

const OneLabel = ({ info, searchResult }) => {
  const { icon, type } = info
  const preventDefault = useCallback(e => {
    e.preventDefault()
  }, [])

  return (
    <li
      className="one-label"
      onClick={preventDefault}
      onMouseDown={preventDefault}
    >
      <Tooltip openDelay placement="top">
        <TooltipActivator>
          <div
            className={cn(`actual-label ${type}`, {
              match: searchResult.matchedOn === type,
            })}
          >
            {icon}
          </div>
        </TooltipActivator>
        <TooltipContent>
          <LabelTooltipContent info={info} />
        </TooltipContent>
      </Tooltip>
    </li>
  )
}

export default OneLabel
