import { useContext } from 'react'
import { useCallbackOne } from 'use-memo-one'
import { SiteCtx } from '@/site-context'
import { lint } from '../../codemirror/tools'

const errorSeverity = new Set(['error', 2])

const useLint = ({ view }) => {
  const { language } = useContext(SiteCtx)
  return useCallbackOne(
    async ({ editorCode }) => {
      const lintResults = await lint({
        code: editorCode,
        langId: language,
        view,
      })
      const hasErrors = lintResults.some(r => errorSeverity.has(r.severity))

      let html = ''
      const wasSuccessful = !hasErrors
      if (hasErrors) {
        html = 'Fix lint errors before running your code'
      }

      return { html, wasSuccessful }
    },
    [language, view]
  )
}

export default useLint
