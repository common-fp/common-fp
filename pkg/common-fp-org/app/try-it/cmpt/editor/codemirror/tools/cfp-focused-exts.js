/**
 * Cm-focused is removed when a panel gains focus. This feels unintuitive to me
 * as I want the unfocused styles to apply when the editor as a whole loses
 * focus. I also encountered issues with a couple other attempted solutions
 *
 * - Testing for focus within EditorView.editorAttributes.of : the issue here is
 *   the view wasn't updating after losing focus, which led me to try...
 * - Tracking focus via blur and focus domEventObservers : these had their own
 *   issues. For one, they fire during the state updating phase meaning we can't
 *   dispatch during these observers. And secondly they seem to be custom
 *   implementations of the events since blur wasn't firing when I clicked
 *   outside of the editor.
 *
 * This view plugin works and is simple. I is happy
 */

import debounce from 'debounce'
import { StateEffect, StateField } from '@codemirror/state'
import { EditorView, ViewPlugin } from '@codemirror/view'

const cfpFocusedEffect = StateEffect.define()

const cfpFocusedState = StateField.define({
  create: () => false,
  update: (prevVal, tr) => {
    const lastEffect = tr.effects.filter(ef => ef.is(cfpFocusedEffect)).at(-1)
    return lastEffect ? lastEffect.value : prevVal
  },
})

const updateCfpFocused = ViewPlugin.define(view => {
  let trackFocus = true
  let resumeTimeoutId
  const pauseFocusTracking = () => {
    trackFocus = false
  }
  const resumeFocusTracking = () => {
    trackFocus = true
    const editorHasFocus =
      document.activeElement && view.dom.contains(document.activeElement)
    updateFocus(editorHasFocus)
  }
  const updateFocus = debounce(updatedIsFocused => {
    if (!trackFocus) return

    const currentIsFocused = view.state.field(cfpFocusedState)
    if (updatedIsFocused === currentIsFocused) return

    view.dispatch({
      effects: [cfpFocusedEffect.of(updatedIsFocused)],
    })
  }, 50)

  const onMouseDown = () => {
    pauseFocusTracking()
    resumeTimeoutId = setTimeout(resumeFocusTracking, 2000)
  }
  const onMouseUp = () => {
    clearTimeout(resumeTimeoutId)
    resumeFocusTracking()
  }
  const onBlur = () => updateFocus(false)
  const onFocus = () => updateFocus(true)
  view.dom.addEventListener('blur', onBlur, { capture: true })
  view.dom.addEventListener('focus', onFocus, { capture: true })
  view.dom.addEventListener('mousedown', onMouseDown, { capture: true })
  view.dom.addEventListener('mouseup', onMouseUp, { capture: true })

  const destroy = () => {
    view.dom.removeEventListener('blur', onBlur, { capture: true })
    view.dom.removeEventListener('focus', onFocus, { capture: true })
    view.dom.removeEventListener('mousedown', onMouseDown, { capture: true })
    view.dom.removeEventListener('mouseup', onMouseUp, { capture: true })
  }
  return { destroy }
})

const cfpFocusedExt = EditorView.editorAttributes.of(view => {
  const isCfpFocused = view.state.field(cfpFocusedState)
  return isCfpFocused ? { class: 'cfp-focused' } : {}
})

export default [cfpFocusedState, updateCfpFocused, cfpFocusedExt]
