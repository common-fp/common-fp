import { useEffect, useRef } from 'react'
import PerfectScrollbar from 'perfect-scrollbar'
import OneSearchResult from './one-search-result'

import './search-results.scss'

const SearchResults = ({ results }) => {
  const ps = useRef()
  useEffect(() => {
    ps.current = new PerfectScrollbar('.search-results', {
      wheelPropagation: false,
    })
  }, [])
  useEffect(() => {
    ps.current.update()
  }, [results])

  if (!results.length) {
    return (
      <div className="search-results">
        <ol className="search-results" role="list">
          <li className="no-matches">No Matches</li>
        </ol>
      </div>
    )
  }
  return (
    <div className="search-results">
      <ol role="list">
        {results.map(oneResult => (
          <OneSearchResult key={oneResult.name} result={oneResult} />
        ))}
      </ol>
      <div className="overflow-fade" />
    </div>
  )
}

export default SearchResults
