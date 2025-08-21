'use client'

import { createContext, useState } from 'react'
import { useMemoOne } from 'use-memo-one'
import usePerformRun from './use-perform-run'
import useCopyToUrl from './use-copy-to-url'

const EditorCtx = createContext()

const Context = props => {
  const { children } = props
  const [compartments, setCompartments] = useState()
  const [isRunning, setIsRunning] = useState(false)
  const [resultRef, setResultRef] = useState()
  const [showResultPane, setShowResultPane] = useState(false)
  const [view, setView] = useState()
  const [wasRunSuccessful, setWasRunSuccessful] = useState(true)
  const performRun = usePerformRun({
    isRunning,
    resultRef,
    setWasRunSuccessful,
    setIsRunning,
    view,
  })
  const copyToUrl = useCopyToUrl({ view })

  const ctx = useMemoOne(
    () => ({
      compartments,
      setCompartments,
      copyToUrl,
      isRunning,
      setIsRunning,
      performRun,
      resultRef,
      setResultRef,
      showResultPane,
      setShowResultPane,
      view,
      setView,
      wasRunSuccessful,
      setWasRunSuccessful,
    }),
    [
      compartments,
      copyToUrl,
      isRunning,
      performRun,
      resultRef,
      showResultPane,
      view,
      wasRunSuccessful,
    ]
  )

  return <EditorCtx.Provider value={ctx}>{children}</EditorCtx.Provider>
}

export default Context
export { EditorCtx }
