/**
 * note 1: linting a runtime error doesn't make sense on paper.  What it means
 *   here is that we're using codemirror's linting tools to display to the user
 *   the error they encountered.  It will be more intuitive for users to see the
 *   error at the code causing it.
 *
 * note 2: this error disappears after the source is modified.  I'm going to
 *   keep this behavior until someone speaks up about it being unintuitive.  At
 *   that point we can discuss what UX makes sense because I'm not sure
 *   right now.
 */

import { useContext } from 'react'
import { useCallbackOne } from 'use-memo-one'
import { forEachDiagnostic, setDiagnostics } from '@codemirror/lint'
import { SiteCtx } from '@/site-context'
import Traverser from '@/deps/traverser.mjs'
import c from '@/constants'
import { getTsEditorWorker } from '../../codemirror/tools'

const useLintRuntimeError = ({ view }) => {
  const { language } = useContext(SiteCtx)

  return useCallbackOne(
    async ({ editorCode, errorInfo }) => {
      const errorRange =
        language === 'js' ?
          await getJsErrorRange({ editorCode, errorInfo })
        : await getTsErrorRange({ errorInfo })

      const diagnostics = [
        {
          from: errorRange[0],
          to: errorRange[1],
          severity: 'error',
          markClass: 'cfp-runtime-error',
          source: 'runtime error',
          // todo: instead of passing the whole error message, instead we should
          // pass renderMessage which first displays a truncated error with the
          // option of letting the user expand it.
          message: errorInfo.error.message,
        },
      ]
      forEachDiagnostic(view.state, d => diagnostics.push(d))
      const transaction = setDiagnostics(view.state, diagnostics)
      view.dispatch(transaction)
    },
    [language, view]
  )
}

async function getJsErrorRange({ editorCode, errorInfo }) {
  const espree = await import('espree')

  const ast = espree.parse(editorCode, {
    ecmaVersion: c.editor.ecmaVersion,
    sourceType: c.editor.sourceType,
  })

  const searchIdx = errorInfo.location.characterIdx
  let traversingFurtherAway = false
  let closestDistance = Infinity
  let errorRange

  const nodeEntered = node => {
    if (traversingFurtherAway) return

    const distance = Math.abs(searchIdx - node.start)
    traversingFurtherAway = distance > closestDistance
    if (distance < closestDistance) {
      errorRange = [node.start, node.end]
      closestDistance = distance
    }
  }

  Traverser.traverse(ast, { enter: nodeEntered })

  return errorRange
}

async function getTsErrorRange({ errorInfo }) {
  const tsEditorWorker = await getTsEditorWorker()
  const charPosition = errorInfo.location.characterIdx
  return await tsEditorWorker.getErrorRangeFromCharPosition(charPosition)
}

export default useLintRuntimeError
