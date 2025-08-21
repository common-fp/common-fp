import cn from 'classnames'
import { useContext, useMemo } from 'react'
import SiteHeader from '@/cmpt/site-header'
import DocsLink from './cmpt/docs-link'
import SearchBar from './cmpt/search-bar'
import Content from './content'
import { PageCtx } from './page-context'

import './main.scss'

const Main = () => {
  const { utility } = useContext(PageCtx)
  const isRootDocsPage = !utility
  const isUtilityPage = !!utility

  const customDocsLinks = useMemo(
    () => (
      <>
        <DocsLink className="desktop" utilityName="">
          Documentation
        </DocsLink>
        <DocsLink className="tablet-and-smaller" utilityName="">
          Docs
        </DocsLink>
      </>
    ),
    []
  )

  return (
    <>
      <SiteHeader customDocsLinks={customDocsLinks} />
      <main
        className={cn('content-frame documentation', {
          'root-docs-page': isRootDocsPage,
        })}
      >
        <SearchBar className={cn({ 'tablet-and-larger': isUtilityPage })} />
        <Content />
      </main>
    </>
  )
}

export default Main
