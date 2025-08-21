type Movie = {
  title: string
  categories: string[]
  released: number
}

const movies = getMovies()

const isNotComedy = (movie: Movie) => !movie.categories.includes('comedy')
const findOldestNonComedy = findLast(isNotComedy)
const oldestNonComedy = findOldestNonComedy(movies)

console.log(oldestNonComedy?.title)
// is "Mike Hammer: Murder Takes All"

function getMovies(): Movie[] {
  return [
    {
      title: 'Doing Time on Maple Drive',
      categories: ['drama'],
      released: 1992,
    },
    {
      title: 'Mike Hammer: Murder Takes All',
      categories: ['crime', 'mystery', 'thriller'],
      released: 1989,
    },
    {
      title: 'Copper Mountain',
      categories: ['comedy'],
      released: 1983,
    },
    {
      title: 'All In Good Taste',
      categories: ['comedy'],
      released: 1983,
    },
    {
      title: 'Rubberface',
      categories: ['comedy', 'drama'],
      released: 1981,
    },
  ]
}
