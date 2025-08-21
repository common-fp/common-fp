import { useMemo, useRef } from 'react'
import cn from 'classnames'
import hljs from '@/utils/hljs'

const SimpleJsCodeBlock = ({ className, code }) => {
  const elPre = useRef()
  const elCodeJs = useRef()

  const highlightedCode = useMemo(
    () => hljs.highlight(code, { language: 'js' }).value,
    [code]
  )

  return (
    <div className={cn('code-block', 'code-block-simple-js', className)}>
      <pre ref={elPre}>
        <code
          ref={elCodeJs}
          className="js active"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  )
}

export default SimpleJsCodeBlock
