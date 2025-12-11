import { useContext, useEffect, useRef } from 'react'
import homeExamples from '@/built/code-examples/pages/home'
import { EditorCtx } from '../context'
import { SiteCtx } from '@/site-context'
import LoadingIcon from '@/cmpt/loading-icon'
import { simpleAnimate, waitMs } from '@/utils'
import { tabletMinPx } from '@/utils/style-variables'
import getEditorDataFromUrl from '@/utils/get-editor-data-from-url'
import { loadingContainerHeight } from './vars.module.scss'
import {
  EditorView,
  forceLint,
  getCompartmentsAndExtensions,
  getKeymapExts,
  keymapCmpt,
} from './tools'

import './index.scss'

const initialCode = homeExamples.andUse

const Codemirror = () => {
  const cmRef = useRef()
  const loadRef = useRef()
  const wrapperRef = useRef()
  const containerRef = useRef()
  const siteCtx = useContext(SiteCtx)
  const editorCtx = useContext(EditorCtx)

  const performRun = editorCtx.performRun
  const copyToUrl = editorCtx.copyToUrl
  const view = editorCtx.view

  useEffect(() => {
    let resolveEffectScopedView
    let rejectEffectScopedView
    const effectScopedView = new Promise((resolve, reject) => {
      resolveEffectScopedView = resolve
      rejectEffectScopedView = reject
    })
    initView()

    return cleanup

    async function cleanup() {
      try {
        const view = await effectScopedView
        view.destroy()
      } catch {
        // error already logged, nothing to do
      }
    }

    async function initView() {
      try {
        const editorDataFromUrl = getEditorDataFromUrl()
        const code =
          editorDataFromUrl.code || getResponsiveInitialCode(siteCtx.language)

        const initAndShowEditor = async view => {
          try {
            await forceLint({ code, language: siteCtx.language, view })

            const containerEl = containerRef.current
            const loadEl = loadRef.current
            const wrapperEl = wrapperRef.current
            await simpleAnimate(loadEl, { opacity: 0 })
            loadEl.style.display = 'none'

            wrapperEl.style.height = 'auto'
            containerEl.style.height = 'auto'
            const heightAfter = containerEl.offsetHeight + 'px'
            wrapperEl.style.height = '1px'
            containerEl.style.height = loadingContainerHeight

            await simpleAnimate(containerEl, { height: heightAfter })
            wrapperEl.style.height = 'auto'
            containerEl.style.height = 'auto'
            wrapperEl.style.overflow = 'visible'

            await simpleAnimate(wrapperEl, { opacity: 1 })

            await waitMs(300)

            editorCtx.setShowResultPane(true)
          } catch (err) {
            console.error('error showing editor\n', err)
          }
        }

        const { compartments, extensions } = await getCompartmentsAndExtensions(
          {
            copyToUrl: editorCtx.copyToUrl,
            language: siteCtx.language,
            onViewReady: initAndShowEditor,
            performRun: editorCtx.performRun,
          }
        )

        const view = new EditorView({
          doc: code,
          extensions,
          parent: cmRef.current,
        })

        resolveEffectScopedView(view)
        editorCtx.setView(view)
        editorCtx.setCompartments(compartments)
      } catch (err) {
        console.error('error initializing view\n', err)
        rejectEffectScopedView(err)
      }
    }
    // we only want to run this once so no need for dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!view) return

    const keymapExts = getKeymapExts({ copyToUrl, performRun })
    view.dispatch({
      effects: [keymapCmpt.reconfigure(keymapExts)],
    })
  }, [copyToUrl, performRun, view])

  return (
    <>
      <span className="screen-reader-only">
        The editor captures the Tab key. To navigate, first press Escape then
        either Tab or Shift and Tab to navigate the page.
      </span>
      <div className="loading-container" ref={containerRef}>
        <LoadingIcon ref={loadRef} />
        <div className="cfp-codemirror-wrapper" ref={wrapperRef}>
          <div className="cfp-codemirror" ref={cmRef} />
        </div>
      </div>
    </>
  )
}

function getResponsiveInitialCode(language) {
  const responsiveKey =
    window.innerWidth >= tabletMinPx ? 'tabletAndLarger' : 'mobileAndSmaller'

  return initialCode[responsiveKey].full[language].trim()
}

export default Codemirror
