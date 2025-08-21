import { EditorView } from '@codemirror/view'
import { Compartment } from '@codemirror/state'
import { isLaden } from '@/fp-utils'
import { compartment as tsOnlyCmpt } from './get-ts-only-exts'

const getViewIsInitializedExt = ({ langId, onViewReady }) => {
  let onViewReadyCalled = false
  const viewIsInitializedCmpt = new Compartment()

  return viewIsInitializedCmpt.of(
    EditorView.updateListener.of(viewUpdate => {
      if (onViewReadyCalled) return

      const initialCompartmentsMap = new Map(
        viewUpdate.state.config.compartments
      )
      if (langId === 'js') {
        initialCompartmentsMap.delete(tsOnlyCmpt)
      }
      const initialCompartments = [...initialCompartmentsMap.values()]
      if (initialCompartments.every(isLaden)) {
        const { view } = viewUpdate
        onViewReady(view)
        view.dispatch({
          effects: [viewIsInitializedCmpt.reconfigure([])],
        })
        onViewReadyCalled = true
      }
    })
  )
}

export default getViewIsInitializedExt
