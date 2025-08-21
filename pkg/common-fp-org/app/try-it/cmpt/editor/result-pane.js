import { useContext, useEffect, useRef } from 'react'
import cn from 'classnames'
import dedent from 'dedent'
import { RecognizedBrowser } from 'sniffr'
import Appear from '@/cmpt/appear'
import Button from '@/cmpt/button'
import Tooltip, { TooltipActivator, TooltipContent } from '@/cmpt/tooltip'
import LoadingIcon from '@/cmpt/loading-icon'
import hljs from '@/utils/hljs'
import { EditorCtx } from './context'

import './result-pane.scss'

const ResultPaneContent = () => {
  const resultRef = useRef()
  const editorCtx = useContext(EditorCtx)
  const { wasRunSuccessful } = editorCtx

  const runHotkey = convertMod('Mod+Enter')
  const copyToUrlHotkey = convertMod('Mod+S')

  useEffect(() => {
    editorCtx.setResultRef(resultRef)
    const showAnything = hljs.highlight('show(anything)', {
      language: 'js',
    }).value
    const consoleLog = hljs.highlight('console.log', { language: 'js' }).value
    const debug = hljs.highlight('debugger', { language: 'js' }).value
    resultRef.current.innerHTML = dedent(`
      Call \`${showAnything}\` to display it here

      \`${consoleLog}\` and \`${debug}\` work with developer tools
    `)
    // we only want to run this once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="result-pane">
      <div className="controls">
        <div className="left">
          <Tooltip openDelay mouseOnly placement="top">
            <TooltipActivator>
              <Button
                className="run"
                primary
                disabled={editorCtx.isRunning}
                onClick={editorCtx.performRun}
              >
                Run
              </Button>
            </TooltipActivator>
            <TooltipContent>{runHotkey}</TooltipContent>
          </Tooltip>
          <LoadingIcon active={editorCtx.isRunning} />
        </div>
        <div className="right">
          <Tooltip openDelay mouseOnly placement="top">
            <TooltipActivator>
              <Button className="copy-to-url" onClick={editorCtx.copyToUrl}>
                Copy To Url
              </Button>
            </TooltipActivator>
            <TooltipContent>
              <div className="save-to-url-tooltip">
                <div className="hotkey">{copyToUrlHotkey}</div>
                <div className="content">
                  Saves the editor state to the url and copies it to your
                  clipboard
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className={cn('result-wrapper', { success: wasRunSuccessful })}>
        <pre className="result" ref={resultRef}></pre>
      </div>
    </div>
  )
}

const ResultPane = () => {
  const editorCtx = useContext(EditorCtx)
  return (
    <Appear when={editorCtx.showResultPane}>
      <ResultPaneContent />
    </Appear>
  )
}

function convertMod(hotkey) {
  const isOsx = RecognizedBrowser.os.name === 'macos'
  return hotkey.replaceAll('Mod', isOsx ? 'Cmd' : 'Ctrl')
}

export default ResultPane
