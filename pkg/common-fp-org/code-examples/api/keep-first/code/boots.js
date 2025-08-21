const bootsByNumSold = [
  {
    name: 'Columbia Escape',
    sold: 82,
  },
  {
    name: 'Keen Gibson',
    sold: 79,
  },
  {
    name: 'Timberland Classic',
    sold: 65,
  },
  {
    name: 'Nortiv Armadillo',
    sold: 58,
  },
]

const keepTopThree = keepFirst(3)
const getTopSellers = compose([
  keepTopThree,
  mapValues(get('name')),
  joinValues(', '),
])
const topSellers = getTopSellers(bootsByNumSold)
console.log(topSellers)
/// prints
/// Columbia Escape, Keen Gibson, Timberland Classic
