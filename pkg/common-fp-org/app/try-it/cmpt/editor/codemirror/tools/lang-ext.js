/**
 * I don't like the default auto-completions and don't think there's a config to
 * turn them off.  Re-creating it here works well enough
 */
import { LanguageSupport } from '@codemirror/language'
import { Compartment } from '@codemirror/state'
import {
  javascriptLanguage,
  typescriptLanguage,
  localCompletionSource,
} from '@codemirror/lang-javascript'

const compartment = new Compartment()
const langSupportArg = [
  javascriptLanguage.data.of({
    autocomplete: localCompletionSource,
  }),
]
const langExt = {
  js: new LanguageSupport(javascriptLanguage, langSupportArg),
  ts: new LanguageSupport(typescriptLanguage, langSupportArg),
}

export default langExt
export { compartment }
