import { useMemo } from 'react'
import cn from 'classnames'
import { kebabCase } from 'change-case'
import OneTabButton from './one-button'
import OneTabPanel from './one-panel'
import TabHeader from './header'
import TabContext from './context'
import TabPanels from './panels'

import './index.scss'

const Tabs = ({ className, list, links = [] }) => {
  const { buttons, panels } = useMemo(
    () => list.reduce(toButtonsAndPanels, { buttons: [], panels: [] }),
    [list]
  )

  return (
    <div className={cn('tabs', className)}>
      <TabContext buttons={buttons}>
        <TabHeader buttons={buttons} links={links} />
        <TabPanels panels={panels} />
      </TabContext>
    </div>
  )
}

function toButtonsAndPanels(result, { button, panel }, idx) {
  // the first tab is the default and should have a blank id corresponding to
  // a blank location.hash
  const id = idx === 0 ? '' : kebabCase(button.text)
  result.buttons.push(<OneTabButton key={idx} {...button} id={id} />)
  result.panels.push(<OneTabPanel key={idx} {...panel} id={id} />)
  return result
}

export default Tabs
