import getAutocompleteExt from './get-autocomplete-ext'
import getLintExt from './get-lint-ext'
import getTsOnlyExts, { tsFacetWorkerExt } from './get-ts-only-exts'
import forceLint from './force-lint'
import langExt from './lang-ext'

export default async (language, { compartments, view }) => {
  try {
    const langId = language
    const cmpt = compartments

    const [autocompleteExt, curLangExt, lintExt, tsOnlyExts] =
      await Promise.all([
        getAutocompleteExt(langId),
        langExt[langId],
        getLintExt(langId),
        getTsOnlyExts(langId),
      ])

    view.dispatch({
      effects: [
        cmpt.autocomplete.reconfigure(autocompleteExt),
        cmpt.language.reconfigure(curLangExt),
        cmpt.lint.reconfigure(lintExt),
        cmpt.tsOnly.reconfigure(tsOnlyExts),
      ],
    })

    const code = view.state.doc.toString()
    if (language === 'ts') {
      tsFacetWorkerExt.value.worker.updateFile({
        path: 'example.ts',
        code,
      })
    }
    await forceLint({ code, language, view })
  } catch (err) {
    console.error('error switching language\n', err)
  }
}
