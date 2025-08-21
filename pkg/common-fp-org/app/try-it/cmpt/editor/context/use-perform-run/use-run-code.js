import { useContext, useRef } from 'react'
import dedent from 'dedent'
import { encode } from 'html-entities'
import { useCallbackOne } from 'use-memo-one'
import createWorkerBox from 'workerboxjs'
import superjson from 'superjson'
import { SiteCtx } from '@/site-context'
import hljs from '@/utils/hljs'
import truncateToNChars from '@/utils/truncate-to-n-chars'
import { formatCode } from '../../codemirror/tools'
import buildCode from './build-code'
import findErrorLocation from './find-error-location'

const useRunCode = () => {
  const workerboxRef = useRef()
  const { language } = useContext(SiteCtx)

  return useCallbackOne(
    async ({ editorCode }) => {
      if (workerboxRef.current) {
        await workerboxRef.current.destroy()
      }

      const [workerbox, { bundle: codeToRun, sourcemap }] = await Promise.all([
        createWorkerBox(),
        buildCode({ editorCode, language }),
      ])
      workerboxRef.current = workerbox
      const argsLogged = []
      let errorInfo
      let timedOut = false
      const scope = {
        send: ({ sanitizedArgs }) => {
          argsLogged.push(...sanitizedArgs, '\n')
        },
        sendError: info => {
          errorInfo = info
        },
      }
      try {
        await workerbox.run(codeToRun, scope)
      } catch (err) {
        if (err.message === 'timeout') timedOut = true
        else errorInfo = { during: 'runtime', error: err }
      }

      if (timedOut) {
        const html = `<p>Run timed out</p>
<p>Keep your examples under five seconds</p>
`
        return {
          html,
          wasSuccessful: false,
        }
      } else if (errorInfo) {
        let loc
        let atLineColumn = ''
        if (
          errorInfo.during === 'runtime' &&
          errorInfo.error.message !== 'timeout'
        ) {
          loc = findErrorLocation(errorInfo.error.stack, sourcemap)
          atLineColumn = `\nat line ${loc.line}, column ${loc.column}\n`
          errorInfo.location = loc
        }
        const debug = hljs.highlight('debugger', { language: 'js' }).value
        const html = dedent(`
Error: ${truncateToNChars(200, errorInfo.error.message)}
${atLineColumn}
Remember you can use \`${debug}\` to step through in developer tools
      `)
        return {
          html,
          wasSuccessful: false,
          errorInfo,
        }
      } else {
        // remove the trailing newline
        argsLogged.pop()

        const formattedArgs = await Promise.all(
          argsLogged.map(async arg => {
            let val =
              arg === undefined ? 'undefined' : superjson.serialize(arg).json
            const type = typeof val === 'string' ? 'string' : 'json'
            if (type === 'json') {
              val = await formatCode(JSON.stringify(val, null, 2), 'json')
            }
            return { type, val }
          })
        )
        const resultList = []
        for (const { type, val } of formattedArgs) {
          const displayVal =
            type === 'json' ?
              hljs.highlight(val, { language: 'js' }).value
            : encode(val)

          resultList.push(displayVal)
        }
        const resultHtml = resultList.join(
          '<div className="result-spacer"></div>'
        )
        return {
          html: resultHtml || '<i>Nothing to show</i>',
          wasSuccessful: true,
        }
      }
    },
    [language]
  )
}

export default useRunCode
