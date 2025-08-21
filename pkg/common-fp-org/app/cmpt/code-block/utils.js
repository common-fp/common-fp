import queryString from 'query-string'
import buildEditorDataForUrl from '@/utils/build-editor-data-for-url'

const getTryItUrl = ({ fullCode, hydrationAwareLanguage }) => {
  const editorData = buildEditorDataForUrl({
    code: fullCode[hydrationAwareLanguage].trimEnd(),
    language: hydrationAwareLanguage,
  })
  // queryString does some encoding/decoding of its own so we have to
  // use queryString.stringify
  const hash = queryString.stringify({ editorData })
  return `/try-it#${hash}`
}

const observeWhenComponentIsRendered = argObj => {
  if (argObj.isRendered) return

  const { elPre, setIsRendered } = argObj

  const observer = new MutationObserver(() => {
    const codeRendered = !!elPre.current.querySelector('code').children.length
    if (codeRendered) {
      setIsRendered(true)
      observer.disconnect()
    }
  })

  observer.observe(elPre.current, { subtree: true, childList: true })
}

export { getTryItUrl, observeWhenComponentIsRendered }
