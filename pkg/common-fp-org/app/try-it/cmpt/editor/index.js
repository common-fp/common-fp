'use client'

// @refresh reset

import Context from './context'
import Codemirror from './codemirror'
import Options from './options'
import ResultPane from './result-pane'

const Editor = () => {
  return (
    <Context>
      <Options />
      <Codemirror />
      <ResultPane />
    </Context>
  )
}

export default Editor
