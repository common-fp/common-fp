import { useMemo } from 'react'
import cn from 'classnames'
import hljs from '@/utils/hljs'

const ShCodeBlock = ({ className, code, showTopPanel = true }) => {
  const highlightedCode = useMemo(
    () => hljs.highlight(code, { language: 'sh' }).value,
    [code]
  )

  return (
    <div className={cn('code-block code-block-sh', className)}>
      {showTopPanel && (
        <div className="top-panel">
          <div className="tab-list">
            <div className="tab active">.sh</div>
          </div>
        </div>
      )}
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </div>
  )
}

export default ShCodeBlock
