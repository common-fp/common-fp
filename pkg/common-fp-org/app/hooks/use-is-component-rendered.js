import { useContext, useEffect, useRef } from 'react'
import { SiteCtx } from '@/site-context'

const useIsComponentRendered = ({ debugId, isRendered }) => {
  const ref = useRef(debugId)
  const { setComponentToIsRendered } = useContext(SiteCtx)
  useEffect(() => {
    setComponentToIsRendered(ref, isRendered)
  }, [isRendered, setComponentToIsRendered])
}

export default useIsComponentRendered
