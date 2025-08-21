import cn from 'classnames'
import InfoIcon from '@/icons/info'
import Tooltip, { TooltipActivator, TooltipContent } from './tooltip'

import './tooltip-info.scss'

const TooltipInfo = ({ children, className, content, term }) => {
  return (
    <Tooltip>
      <TooltipActivator Tag="span">
        <span className={cn('tooltip-info', className)}>
          {term} <InfoIcon />
        </span>
      </TooltipActivator>
      <TooltipContent>{content || children}</TooltipContent>
    </Tooltip>
  )
}

export default TooltipInfo
