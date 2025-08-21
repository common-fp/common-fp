import { showPanel } from '@codemirror/view'

function createStatusPanel(view) {
  const statusPanel = document.createElement('div')
  statusPanel.className = 'cm-status-panel'

  const line = document.createElement('div')
  line.className = 'cm-status-element cm-status-line'
  const lineLabel = document.createElement('div')
  lineLabel.className = 'cm-status-label cm-status-line-label'
  lineLabel.innerHTML = 'Ln'
  const lineValue = document.createElement('div')
  lineValue.className = 'cm-status-value cm-status-line-value'
  lineValue.innerHTML = '1'
  line.appendChild(lineLabel)
  line.appendChild(lineValue)

  const column = document.createElement('div')
  column.className = 'cm-status-element cm-status-column'
  const columnLabel = document.createElement('div')
  columnLabel.className = 'cm-status-label cm-status-column-label'
  columnLabel.innerHTML = 'Col'
  const columnValue = document.createElement('div')
  columnValue.className = 'cm-status-value cm-status-column-value'
  columnValue.innerHTML = '1'
  column.appendChild(columnLabel)
  column.appendChild(columnValue)

  statusPanel.appendChild(line)
  statusPanel.appendChild(column)

  const update = viewUpdate => {
    if (!viewUpdate.selectionSet) return

    const { state } = view
    const docLine = state.doc.lineAt(state.selection.main.head)
    lineValue.innerHTML = docLine.number || 1

    const col = state.selection.ranges[0].head - docLine.from + 1
    columnValue.innerHTML = col || 1
  }

  return {
    dom: statusPanel,
    update,
  }
}

const statusPanelExt = showPanel.of(createStatusPanel)

export default statusPanelExt
