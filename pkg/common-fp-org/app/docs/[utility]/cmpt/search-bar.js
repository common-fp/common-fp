'use client'

import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { useDebouncedEffect } from 'use-debounced-effect'
import { useCallbackOne } from 'use-memo-one'
import TextInput from '@/cmpt/text-input'
import { waitMs, waitSlowAnimationDur } from '@/utils'
import SearchBarStateToggle from './search-bar-state-toggle'
import SearchIcon from '@/icons/search'
import SearchResults from './search-results'
import getResults from './get-results'
import { PageCtx } from '../page-context'
import { allSearchResults } from '../utils'

import './search-bar.scss'

const SearchBar = ({ className }) => {
  const { utility } = useContext(PageCtx)
  const [expanded, setExpanded] = useState(true)
  const [isToggling, setIsToggling] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [results, setResults] = useState(allSearchResults)
  const searchBarRef = useRef()

  const updateResults = useCallbackOne(() => {
    const results = getResults(searchValue)
    setResults(results)
  }, [searchValue])

  useDebouncedEffect(updateResults, 500, [searchValue])

  const toggleExpanded = useCallback(() => {
    toggleExpandedAsync()
    async function toggleExpandedAsync() {
      if (isToggling) return

      setExpanded(!expanded)
      setIsToggling(true)
      await waitSlowAnimationDur()
      const smallBuffer = 200
      await waitMs(smallBuffer)
      setIsToggling(false)
    }
  }, [expanded, isToggling])

  useEffect(() => {
    if (!utility && !expanded) toggleExpanded()
  }, [expanded, utility, toggleExpanded])

  const stateToggleProps = {
    expanded,
    isToggling,
    toggle: toggleExpanded,
  }

  return (
    <div
      className={cn('search-bar', className, { expanded })}
      ref={searchBarRef}
    >
      <div className="content-wrapper">
        <div className="content">
          <TextInput
            autoFocus
            className="search-input"
            icon={<SearchIcon />}
            id="search-utility"
            onTextChange={setSearchValue}
            placeholder="mapValues"
            value={searchValue}
          />
          <SearchResults results={results} />
        </div>
      </div>
      {!!utility && (
        <div className="state-toggle-wrapper tablet-and-larger">
          <SearchBarStateToggle {...stateToggleProps} />
        </div>
      )}
    </div>
  )
}

export default SearchBar
