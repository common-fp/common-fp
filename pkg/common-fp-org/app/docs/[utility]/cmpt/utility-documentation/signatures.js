import { useContext } from 'react'
import { PageCtx } from '../../page-context'

import './signatures.scss'

const Signatures = () => {
  const { utility } = useContext(PageCtx)

  const renderedSignatures = utility.signatures.map(
    (Signature, idx, allSignatures) => (
      <li key={idx}>
        <pre>
          <code>
            <Signature />
          </code>
        </pre>
        {allSignatures[idx + 1] && <div className="or">Or</div>}
      </li>
    )
  )

  return (
    <ul role="list" className="signatures">
      {renderedSignatures}
    </ul>
  )
}

export default Signatures
