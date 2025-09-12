import cn from 'classnames'
import { useCallback, useContext } from 'react'
import Tooltip, { TooltipActivator, TooltipContent } from '@/cmpt/tooltip'
import useInitialDelayPassed from '@/hooks/use-initial-delay-passed'
import LabelTooltipContent from './label-tooltip-content'
import { PageCtx } from '../page-context'
import './one-label.scss'

const OneLabel = ({ info, searchResult }) => {
  const { icon, type } = info
  const preventDefault = useCallback(e => {
    e.preventDefault()
  }, [])
  const { utility } = useContext(PageCtx)

  // initialDelayPassed is a mobile workaround. see commit message for details
  const initialDelayPassed = useInitialDelayPassed({ ms: 200, reset: utility })

  return (
    <li
      className="one-label"
      onClick={preventDefault}
      onMouseDown={preventDefault}
    >
      <Tooltip enabled={initialDelayPassed} openDelay placement="top">
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
