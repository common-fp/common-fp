import { EditorView } from '@codemirror/view'
import forceLint from './force-lint'
import { formatCode } from './format'
import getCompartmentsAndExtensions from './get-compartments-and-extensions'
import getKeymapExts, { compartment as keymapCmpt } from './get-keymap-exts'
import { lint } from './get-lint-ext'
import getTsEditorWorker from './get-ts-editor-worker'
import switchLanguage from './switch-language'

export {
  EditorView,
  forceLint,
  formatCode,
  getCompartmentsAndExtensions,
  getKeymapExts,
  getTsEditorWorker,
  keymapCmpt,
  lint,
  switchLanguage,
}
