// in /docs, we just want to use history.pushState since everything is already
// loaded in memory.

import { useCallback, useContext } from 'react'
import Link from 'next/link'
import { PageCtx } from '../page-context'

const DocsLink = ({ children, utilityName, ...rest }) => {
  const { setUtility } = useContext(PageCtx)
  const href = utilityName ? `/docs/${utilityName}` : '/docs'
  const navigateViaPushState = useCallback(
    e => {
      e.preventDefault()
      setUtility(utilityName)
    },
    [setUtility, utilityName]
  )

  return (
    <Link
      href={href}
      onNavigate={navigateViaPushState}
      prefetch={false}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default DocsLink
