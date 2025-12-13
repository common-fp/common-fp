import { Compartment } from '@codemirror/state'
import { autocompletion } from '@codemirror/autocomplete'

const compartment = new Compartment()
const autocompleteExt = {}
if (typeof window !== 'undefined')
  initAutocompleteExt(document.documentElement.dataset.lang)

const getAutocompleteExt = async langId => {
  initAutocompleteExt(langId)

  return await autocompleteExt[langId]
}

async function initAutocompleteExt(langId) {
  if (autocompleteExt[langId]) return autocompleteExt[langId]

  autocompleteExt[langId] = new Promise(async (resolve, reject) => {
    try {
      const arg = {
        activateOnTyping: false,
        icons: false,
      }
      if (langId === 'ts') {
        const { tsAutocompleteWorker } = await import(
          '@/bundles/codemirror-ts_v2-3-1'
        )
        arg.override = [tsAutocompleteWorker()]
      }

      resolve(autocompletion(arg))
    } catch (err) {
      reject(err)
    }
  })

  return await autocompleteExt[langId]
}

export default getAutocompleteExt
export { compartment }
