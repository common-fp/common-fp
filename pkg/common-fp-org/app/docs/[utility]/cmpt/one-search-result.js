import { useContext } from 'react'
import cn from 'classnames'
import DocsLink from './docs-link'
import * as utilityData from '../utility-data'
import Labels from './labels'
import { PageCtx } from '../page-context'

import './one-search-result.scss'

const OneSearchResult = ({ result }) => {
  const { utility: currentPageUtility } = useContext(PageCtx)
  const utility = utilityData[result.name]
  const active = currentPageUtility === utility
  if (!utility) {
    throw new Error('no data found for utility: ' + result.name)
  }
  const { labels = [] } = utility
  if (labels.some(l => !l)) {
    throw new Error('undefined label found for utility: ' + result.name)
  }

  return (
    <li className={cn('one-search-result', { active })}>
      <DocsLink utilityName={utility.name}>
        {utility.name} <Labels data={labels} searchResult={result} />
      </DocsLink>
    </li>
  )
}

export default OneSearchResult
