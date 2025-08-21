import queryString from 'query-string'
import { decode } from 'js-base64'

const getEditorDataFromUrl = () => {
  if (typeof window === 'undefined') return {}

  const parsedHash = queryString.parse(location.hash)
  const editorData =
    parsedHash.editorData ? JSON.parse(decode(parsedHash.editorData)) : {}
  return editorData
}

export default getEditorDataFromUrl
