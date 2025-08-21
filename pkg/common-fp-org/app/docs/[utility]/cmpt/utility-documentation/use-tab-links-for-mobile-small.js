import { useMemo } from 'react'
import GithubIcon from '@/cmpt/github-icon'
import TypescriptIcon from '@/cmpt/typescript-icon'
import useLinkHrefs from './use-link-hrefs'

const useTabLinksForMobileSmall = () => {
  const linkHrefs = useLinkHrefs()

  return useMemo(() => {
    if (!linkHrefs) return []

    return [
      <a
        key="src"
        className="tablet-and-mobile-small tab-link-icon"
        href={linkHrefs.src}
        target="_blank"
      >
        <GithubIcon />
      </a>,
      <a
        key="types"
        className="tablet-and-mobile-small tab-link-icon"
        href={linkHrefs.types}
        target="_blank"
      >
        <TypescriptIcon />
      </a>,
    ]
  }, [linkHrefs])
}

export default useTabLinksForMobileSmall
