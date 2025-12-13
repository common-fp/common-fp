import {
  drawSelection,
  dropCursor,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  lineNumbers,
} from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { lintGutter } from '@codemirror/lint'
import themeExtensions from './theme-extensions'
import { bracketMatching, indentOnInput } from '@codemirror/language'
import { history } from '@codemirror/commands'
import { highlightSelectionMatches } from '@codemirror/search'
import getKeymapExts, { compartment as keymapCmpt } from './get-keymap-exts'
import getAutocompleteExt, {
  compartment as autocompleteCmpt,
} from './get-autocomplete-ext'
import langExt, { compartment as langCmpt } from './lang-ext'
import getLintExt, { compartment as lintCmpt } from './get-lint-ext'
import getTsOnlyExts, { compartment as tsOnlyCmpt } from './get-ts-only-exts'
import getViewIsInitializedExt from './get-view-is-initialized-ext'
import statusPanelExt from './status-panel-ext'
import cfpFocusedExts from './cfp-focused-exts'

const getCompartmentsAndExtensions = async ({
  copyToUrl,
  language: langId,
  onViewReady,
  performRun,
}) => {
  const compartments = {
    autocomplete: autocompleteCmpt,
    keymap: keymapCmpt,
    language: langCmpt,
    lint: lintCmpt,
    tsOnly: tsOnlyCmpt,
  }

  const extensions = [
    statusPanelExt,
    lineNumbers(),
    lintGutter(),
    ...themeExtensions,
    getViewIsInitializedExt({ langId, onViewReady }),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    drawSelection(),
    dropCursor(),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    bracketMatching(),
    highlightActiveLine(),
    highlightSelectionMatches(),
    keymapCmpt.of(getKeymapExts({ copyToUrl, performRun })),
    autocompleteCmpt.of(await getAutocompleteExt(langId)),
    langCmpt.of(langExt[langId]),
    tsOnlyCmpt.of(await getTsOnlyExts(langId)),
    lintCmpt.of(await getLintExt(langId)),
    cfpFocusedExts,
  ]

  return { compartments, extensions }
}

export default getCompartmentsAndExtensions
