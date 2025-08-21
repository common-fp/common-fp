import { useCallbackOne } from 'use-memo-one'
import { makeWaitMs, simpleAnimate } from '@/utils'
import useRunCode from './use-run-code'
import useLint from './use-lint'
import useLintRuntimeError from './use-lint-runtime-error'

const usePerformRun = argObj => {
  const { isRunning, resultRef, setIsRunning, view, setWasRunSuccessful } =
    argObj
  const runCode = useRunCode()
  const lint = useLint({ view })
  const lintRuntimeError = useLintRuntimeError({ view })

  return useCallbackOne(async () => {
    if (!resultRef || isRunning) return undefined

    try {
      const resultEl = resultRef.current
      setIsRunning(true)
      const editorCode = view.state.doc.toString()

      const lintThenRun = async () => {
        const lintRes = await lint({ editorCode })
        return lintRes.wasSuccessful ? await runCode({ editorCode }) : lintRes
      }

      const [lintOrRunResult] = await Promise.all([
        lintThenRun(),
        simpleAnimate(resultEl, { opacity: 0 }).then(makeWaitMs(200)),
      ])
      const { errorInfo, html: resultHtml, wasSuccessful } = lintOrRunResult
      if (errorInfo?.location) lintRuntimeError({ errorInfo, editorCode })
      setWasRunSuccessful(!!wasSuccessful)
      const previousHtml = resultEl.innerHTML
      const previousHeight = resultEl.offsetHeight + 'px'
      resultEl.style.height = 'auto'
      resultEl.innerHTML = resultHtml
      const newHeight = resultEl.offsetHeight + 'px'
      resultEl.innerHTML = previousHtml
      resultEl.style.height = previousHeight
      await simpleAnimate(resultEl, { height: newHeight })
      resultEl.innerHTML = resultHtml
      await simpleAnimate(resultEl, { opacity: 1 })
    } catch (err) {
      console.error('error running code\n', err)
      for (const k of Object.keys(err)) {
        console.error(err[k])
      }
    } finally {
      setIsRunning(false)
    }
  }, [
    isRunning,
    lint,
    lintRuntimeError,
    resultRef,
    setIsRunning,
    runCode,
    view,
  ])
}

export default usePerformRun
