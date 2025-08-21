import { keymap } from '@codemirror/view'
import { Compartment, Prec } from '@codemirror/state'
import {
  defaultKeymap,
  historyKeymap,
  indentLess,
  indentMore,
} from '@codemirror/commands'
import { searchKeymap } from '@codemirror/search'
import { acceptCompletion, completionKeymap } from '@codemirror/autocomplete'
import { lintKeymap } from '@codemirror/lint'
import format from './format'

const filteredLintKeymap = lintKeymap.filter(k => {
  return ['nextDiagnostic'].includes(k.run.name)
})

const compartment = new Compartment()

const getKeymapExts = ({ copyToUrl, performRun }) => {
  const keymapExt = buildKeymapExt({ copyToUrl })
  const keymapOverrideExt = buildKeymapOverrideExt({ performRun })
  return [keymapExt, keymapOverrideExt]
}

function insertConfiguredTab({ state, dispatch }) {
  if (state.selection.ranges.some(r => !r.empty))
    return indentMore({ state, dispatch })

  dispatch(
    state.update(state.replaceSelection(' '.repeat(2)), {
      scrollIntoView: true,
      userEvent: 'input',
    })
  )
  return true
}

function buildKeymapExt({ copyToUrl }) {
  const copyToUrlHandler = () => {
    copyToUrl()
    return true
  }

  const customKeymap = [
    { key: 'Tab', run: acceptCompletion },
    { key: 'Tab', run: insertConfiguredTab },
    { key: 'Shift-Tab', run: indentLess },
    { key: 'Shift-Alt-f', run: format },
    { key: 'Mod-s', run: copyToUrlHandler },
  ]

  return keymap.of([
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...completionKeymap,
    ...filteredLintKeymap,
    ...customKeymap,
  ])
}

function buildKeymapOverrideExt({ performRun }) {
  const keymapOverride = [{ key: 'Mod-Enter', run: lintThenRunCode }]

  return Prec.highest(keymap.of(keymapOverride))

  function lintThenRunCode() {
    performRun()
    return true
  }
}

export default getKeymapExts
export { compartment }
