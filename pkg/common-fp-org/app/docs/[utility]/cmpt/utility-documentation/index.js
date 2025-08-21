import { useContext } from 'react'
import Tabs from '@/cmpt/tabs'
import Header from './header'
import Signatures from './signatures'
import useTabList from './use-tab-list'
import useTabLinksForMobileSmall from './use-tab-links-for-mobile-small'
import FloatingSearchUtilsLink from '../floating-search-utils-link'
import { PageCtx } from '../../page-context'

import './index.scss'

const UtillityDocumentation = () => {
  const { utility } = useContext(PageCtx)
  const tabList = useTabList()
  const tabLinksForMobileSmall = useTabLinksForMobileSmall()

  return (
    <div className="utility-documentation">
      <Header />
      {utility && (
        <>
          <Signatures />
          <Tabs list={tabList} links={tabLinksForMobileSmall} />
          <FloatingSearchUtilsLink />
        </>
      )}
    </div>
  )
}

export default UtillityDocumentation
