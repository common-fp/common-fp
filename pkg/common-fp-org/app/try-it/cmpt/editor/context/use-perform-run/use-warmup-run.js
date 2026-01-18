import { useEffect, useRef } from 'react'

const useWarmupRun = ({ lint, resultRef, runCode, view }) => {
  const warmupRunStateRef = useRef({ hasRun: false })
  const warmupRunRef = useRef()
  warmupRunRef.current ??= new Promise((resolve, reject) => {
    Object.assign(warmupRunStateRef.current, { resolve, reject })
  })

  useEffect(() => {
    if (warmupRunStateRef.current.hasRun || !resultRef) return

    run()

    async function run() {
      try {
        warmupRunStateRef.current.hasRun = true
        const editorCode = view.state.doc.toString()
        await Promise.all([lint({ editorCode }), runCode({ editorCode })])
        warmupRunStateRef.current.resolve()
      } catch (err) {
        warmupRunStateRef.current.reject(err)
      }
    }
  }, [lint, resultRef, runCode, view])

  return warmupRunRef.current
}

export default useWarmupRun
