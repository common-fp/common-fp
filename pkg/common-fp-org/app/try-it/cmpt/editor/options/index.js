import Tooltip, { TooltipActivator, TooltipContent } from '@/cmpt/tooltip'
import RaiseAnIssue from '@/cmpt/raise-an-issue'
import Language from './language'

import './index.scss'

const Options = props => {
  const { language, onLanguageChange } = props

  return (
    <div className="editor-options">
      <Language value={language} onChange={onLanguageChange} />
      <span className="space" />
      <Tooltip>
        <TooltipActivator>
          <span className="beta">Beta</span>
        </TooltipActivator>
        <TooltipContent>
          Please <RaiseAnIssue /> {`if something doesn't work like you expect`}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default Options
