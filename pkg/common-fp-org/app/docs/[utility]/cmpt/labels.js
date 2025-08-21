import cn from 'classnames'
import { useMemo } from 'react'
import OneLabel from './one-label'
import { sortLabels } from '../labels'

import './labels.scss'

const Labels = ({ className, data, searchResult }) => {
  const renderedLabels = useMemo(() => {
    const sortedLabels = sortLabels(data)
    const result = sortedLabels.map((info, idx) => (
      <OneLabel key={idx} info={info} searchResult={searchResult} />
    ))
    return result
  }, [data, searchResult])

  if (!data.length) return null

  return (
    <ol className={cn('labels', className)} role="list">
      {renderedLabels}
    </ol>
  )
}

export default Labels
