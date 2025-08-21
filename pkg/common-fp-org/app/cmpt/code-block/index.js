import JsTsCodeBlock from './js-ts'
import ShCodeBlock from './sh'
import SimpleJsCodeBlock from './simple-js'

import './index.scss'

const CodeBlock = props => {
  const { className, jsTs, sh, simpleJs, debugId, showTopPanel = true } = props

  if (!jsTs && !sh && !simpleJs) {
    throw new Error(`no code given for ${debugId}`)
  }

  if (sh) return <ShCodeBlock code={sh} className={className} />
  if (simpleJs)
    return <SimpleJsCodeBlock code={simpleJs} className={className} />

  return (
    <>
      <JsTsCodeBlock
        className="tablet-and-larger"
        code={jsTs.tabletAndLarger}
        debugId={debugId}
        showTopPanel={showTopPanel}
      />
      <JsTsCodeBlock
        className="mobile-and-smaller"
        code={jsTs.mobileAndSmaller}
        debugId={debugId}
        showTopPanel={showTopPanel}
      />
    </>
  )
}

export default CodeBlock
