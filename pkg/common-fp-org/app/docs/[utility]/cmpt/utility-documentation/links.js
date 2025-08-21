import cn from 'classnames'
import Tooltip, { TooltipActivator, TooltipContent } from '@/cmpt/tooltip'
import GithubIcon from '@/cmpt/github-icon'
import TypescriptIcon from '@/cmpt/typescript-icon'
import useLinkHrefs from './use-link-hrefs'

import './links.scss'

const Links = ({ className }) => {
  const linkHrefs = useLinkHrefs()

  if (!linkHrefs) return

  return (
    <div className={cn('links', className)}>
      <Tooltip closeDelay={false} openDelay mouseOnly>
        <TooltipActivator className="link-wrapper">
          <a href={linkHrefs.src} target="_blank">
            <GithubIcon />
          </a>
        </TooltipActivator>
        <TooltipContent>Source</TooltipContent>
      </Tooltip>

      <Tooltip closeDelay={false} openDelay mouseOnly>
        <TooltipActivator className="link-wrapper">
          <a href={linkHrefs.types} target="_blank">
            <TypescriptIcon />
          </a>
        </TooltipActivator>
        <TooltipContent>Type Definition</TooltipContent>
      </Tooltip>
    </div>
  )
}

export default Links
