import { useCallbackOne, useMemoOne } from 'use-memo-one'
import { createContext, useState } from 'react'
import * as utilityData from './utility-data'

const PageCtx = createContext()

const PageContext = props => {
  const [utility, _setUtility] = useState(utilityData[props.utilityName])

  const setUtility = useCallbackOne(utilityName => {
    _setUtility(utilityData[utilityName])
    history.pushState(history.state, '', `/docs/${utilityName}`)
  }, [])

  const value = useMemoOne(
    () => ({ setUtility, utility }),
    [setUtility, utility]
  )

  return <PageCtx.Provider value={value}>{props.children}</PageCtx.Provider>
}

export default PageContext
export { PageCtx }
