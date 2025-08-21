import { useContext } from 'react'
import Links from './links'
import { PageCtx } from '../../page-context'

import './header.scss'

const Header = () => {
  const { utility } = useContext(PageCtx)
  if (!utility) {
    return (
      <header className="docs-header">
        <h2 className="select-a-utility">Select a utility</h2>
      </header>
    )
  }

  return (
    <>
      <header className="docs-header desktop-and-mobile">
        <h2 className="utility-name">{utility.name}</h2>
        <Links />
      </header>
      <header className="docs-header tablet-and-mobile-small">
        <h2 className="utility-name">{utility.name}</h2>
      </header>
    </>
  )
}

export default Header
