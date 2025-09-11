import { useCallbackOne, useMemoOne } from 'use-memo-one'
import { createContext, useEffect, useState } from 'react'
import * as utilityData from './utility-data'

const PageCtx = createContext()

const PageContext = props => {
  const [utility, _setUtility] = useState(utilityData[props.utilityName])

  useEffect(() => {
    const onPopstate = () => {
      const utilityName =
        location.pathname === '/docs' ?
          ''
        : location.pathname.slice('/docs/'.length)
      _setUtility(utilityData[utilityName])
    }
    window.addEventListener('popstate', onPopstate)

    return () => window.removeEventListener('popstate', onPopstate)
  }, [])

  const setUtility = useCallbackOne(utilityName => {
    _setUtility(utilityData[utilityName])
    const href = utilityName ? `/docs/${utilityName}` : '/docs'
    history.pushState(history.state, '', href)
  }, [])

  const value = useMemoOne(
    () => ({ setUtility, utility }),
    [setUtility, utility]
  )

  return <PageCtx.Provider value={value}>{props.children}</PageCtx.Provider>
}

export default PageContext
export { PageCtx }
