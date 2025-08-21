import { Compartment } from '@codemirror/state'

const compartment = new Compartment()
const pAutocompleteExt = {}

const getAutocompleteExt = async language => {
  if (pAutocompleteExt[language]) return pAutocompleteExt[language]

  pAutocompleteExt[language] = new Promise(async (resolve, reject) => {
    try {
      const arg = {
        activateOnTyping: false,
        icons: false,
      }
      if (language === 'ts') {
        const { tsAutocompleteWorker } = await import(
          '@/bundles/codemirror-ts_v2-3-1'
        )
        arg.override = [tsAutocompleteWorker()]
      }

      const { autocompletion } = await import('@codemirror/autocomplete')
      resolve(autocompletion(arg))
    } catch (err) {
      reject(err)
    }
  })

  return await pAutocompleteExt[language]
}

export default getAutocompleteExt
export { compartment }
