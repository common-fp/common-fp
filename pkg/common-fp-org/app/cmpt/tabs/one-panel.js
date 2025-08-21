import { useContext } from 'react'
import cn from 'classnames'
import { TabCtx } from './context'

import './one-panel.scss'

const OneTabPanel = props => {
  const { id, content } = props
  const { displayedTab, visibleTab } = useContext(TabCtx)

  const displayed = displayedTab === id
  const visible = visibleTab === id

  return <li className={cn('tab-panel', { displayed, visible })}>{content}</li>
}

export default OneTabPanel
