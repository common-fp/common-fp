import { any } from '@/fp-utils'
import { camelCase } from 'change-case'
import * as utilityData from '../utility-data'
import { allSearchResults } from '../utils'

const getResults = searchValue => {
  if (!searchValue) return allSearchResults

  const lowerSearch = searchValue.toLowerCase()
  const upperSearch = searchValue.toUpperCase()
  const camelSearch = camelCase(searchValue)
  const searchLength = searchValue.length
  const includeMutableUtils =
    lowerSearch === 'mutable' || lowerSearch.startsWith('mutate')
  const anyAre = (labelType, labels) =>
    any(label => label.type === labelType)(labels)
  const includeAsyncUtils = lowerSearch.startsWith('async')
  const includeAkaSource =
    lowerSearch.length === 1 ||
    (lowerSearch.length === 2 && lowerSearch[1] === '.')
  const akaLabelMatchesSearch = l =>
    l.type === 'aka' &&
    (lowerSearch.includes(l.lowerMethod) || l.lowerMethod.includes(lowerSearch))
  const akaLabelSourceMatches = l =>
    l.type === 'aka' && l.source === lowerSearch[0]
  const dataLabelMatches = l => {
    if (l.type !== 'data') return false

    if (
      lowerSearch === l.id.toLowerCase() ||
      camelSearch === camelCase(l.id) ||
      l.matchesSearch?.has(lowerSearch)
    )
      return true
  }
  const searchForIcon = lowerSearch.length === 1
  const matchesIcon = l => l.icon === upperSearch

  return Object.entries(utilityData).reduce((res, [name, data]) => {
    let matchedOn
    if (searchForIcon && data.labels.some(matchesIcon)) {
      matchedOn = data.labels.find(matchesIcon).type
    } else if (includeMutableUtils && anyAre('mutable', data.labels)) {
      matchedOn = 'mutable'
    } else if (includeAsyncUtils && anyAre('async', data.labels)) {
      matchedOn = 'async'
    } else if (includeAkaSource && data.labels.some(akaLabelSourceMatches)) {
      matchedOn = 'aka'
    } else if (searchLength >= 3) {
      // if we have at least three characters, then go ahead with the more
      // generic searches
      if (name.toLowerCase().includes(lowerSearch)) {
        matchedOn = 'name'
      } else if (data.labels.some(akaLabelMatchesSearch)) {
        matchedOn = 'aka'
      } else if (data.labels.some(dataLabelMatches)) {
        matchedOn = 'data'
      }
    }

    if (matchedOn) res.push({ name, matchedOn })
    return res
  }, [])
}

export default getResults
