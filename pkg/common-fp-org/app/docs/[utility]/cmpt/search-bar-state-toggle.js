import Chevron from '@/cmpt/chevron'
import Tooltip, { TooltipActivator, TooltipContent } from '@/cmpt/tooltip'

import './search-bar-state-toggle.scss'

const SearchBarStateToggle = props => {
  const { expanded, isToggling, toggle } = props
  const tooltipContent =
    (expanded && !isToggling) || (!expanded && isToggling) ?
      'Hide Sidebar'
    : 'Show Sidebar'

  return (
    <div className="search-bar-state-toggle">
      <Tooltip closeDelay={false} openDelay mouseOnly>
        <TooltipActivator>
          <button type="button" onClick={toggle}>
            <Chevron height="40px" horizontal expanded={expanded} slow />
          </button>
        </TooltipActivator>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </div>
  )
}

export default SearchBarStateToggle
