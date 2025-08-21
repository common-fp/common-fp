import DocsLink from './docs-link'
import SearchIcon from '@/icons/search'

import './floating-search-utils-link.scss'

const FloatingSearchUtilsLink = () => {
  return (
    <DocsLink
      utilityName={''}
      id="floating-search-utils"
      className="mobile-and-smaller"
    >
      <SearchIcon />
    </DocsLink>
  )
}

export default FloatingSearchUtilsLink
