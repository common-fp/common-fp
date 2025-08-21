const mostStreamedShows = {
  netflix: ['Untamed', 'Amy Bradly Is Missing', 'Sandman'],
  hulu: ['Bachelor in Paradise', 'Washington Black', 'Love Island'],
}

const getPopularShows = compose([getValues, flattenOnce])
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
