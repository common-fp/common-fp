import { useContext } from 'react'
import { useCallbackOne } from 'use-memo-one'
import queryString from 'query-string'
import copyToClipboard from 'copy-to-clipboard'
import { SiteCtx } from '@/site-context'
import notify from '@/utils/notify'
import buildEditorDataForUrl from '@/utils/build-editor-data-for-url'

const useCopyToUrl = ({ view }) => {
  const { language } = useContext(SiteCtx)
  return useCallbackOne(() => {
    const code = view.state.doc.toString()
    const parsedHash = queryString.parse(location.hash)
    const editorData = buildEditorDataForUrl({ code, language })
    Object.assign(parsedHash, { editorData })
    const hash = queryString.stringify(parsedHash)
    location.hash = hash

    if (location.href.length > 50000) {
      notify({
        durationSeconds: 8,
        message: 'The url is pretty long - it may not work in all browsers',
        type: 'warning',
      })
    }
    const wasCopied = copyToClipboard(location.href)
    if (wasCopied) {
      notify({
        durationSeconds: 8,
        message: 'Editor state saved to url and copied to your clipboard',
        type: 'success',
      })
    } else {
      notify({
        durationSeconds: 8,
        message:
          "Editor state saved to url but we couldn't copy to your clipboard",
        type: 'warning',
      })
    }
  }, [language, view])
}

export default useCopyToUrl
