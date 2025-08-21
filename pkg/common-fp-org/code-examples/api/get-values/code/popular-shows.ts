type ShowsByPlatform = Record<string, string[]>

const mostStreamedShows: ShowsByPlatform = {
  netflix: ['Untamed', 'Amy Bradly Is Missing', 'Sandman'],
  hulu: ['Bachelor in Paradise', 'Washington Black', 'Love Island'],
}

const getPopularShows = compose([
  getValues<ShowsByPlatform>,
  flattenOnce<Array<string[]>>,
])
const shows = getPopularShows(mostStreamedShows)
console.log(shows)
/// is [
///   Untamed,
///   Amy Bradly Is Missing,
///   Sandman,
///   Bachelor in Paradise,
///   Washington Black,
///   Love Island,
/// ]
