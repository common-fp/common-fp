import { encode } from 'js-base64'

const version = 1

const buildEditorDataForUrl = ({ code, language }) => {
  return encode(JSON.stringify({ code, language, version }))
}

export default buildEditorDataForUrl
