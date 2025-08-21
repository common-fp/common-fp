import cn from 'classnames'
import UtilityDocumentation from './cmpt/utility-documentation'

import './content.scss'

const Content = ({ className }) => {
  return (
    <div className={cn('page-content docs', className)}>
      <UtilityDocumentation />
    </div>
  )
}

export default Content
