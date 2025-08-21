import getAutocompleteExt from './get-autocomplete-ext'
import getLangExt from './get-lang-ext'
import getLintExt from './get-lint-ext'
import getTsOnlyExts, { tsFacetWorkerExt } from './get-ts-only-exts'
import forceLint from './force-lint'

export default async (language, { compartments, view }) => {
  try {
    const lang = language
    const cmpt = compartments

    const [autocompleteExt, langExt, lintExt, tsOnlyExts] = await Promise.all([
      getAutocompleteExt(lang),
      getLangExt(lang),
      getLintExt(lang),
      getTsOnlyExts(lang),
    ])

    view.dispatch({
      effects: [
        cmpt.autocomplete.reconfigure(autocompleteExt),
        cmpt.language.reconfigure(langExt),
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
