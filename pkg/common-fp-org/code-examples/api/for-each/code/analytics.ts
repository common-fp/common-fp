const searchResults1 = ['chris', 'liz', 'phil']
const searchResults2 = ['chris', 'liz']

const db = {
  searchResultsByName: {} as Record<string, number | undefined>,
}

const incrementSearchResult = (name: string) => {
  if (db.searchResultsByName[name] === undefined) {
    db.searchResultsByName[name] = 0
  }
  db.searchResultsByName[name] += 1
}

const incrementResults = forEach(incrementSearchResult)<string[]>

incrementResults(searchResults1)
incrementResults(searchResults2)

console.log(db.searchResultsByName)
/// is {
///   chris: 2
///   liz: 2
///   phil: 1
/// }
