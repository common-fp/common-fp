type Show = {
  name: string
  views: number
}

const shows: Show[] = [
  { name: "Cake'n'Bake", views: 2047 },
  { name: "Greg's Grills", views: 688 },
  { name: "Let's Brunch", views: 512 },
]

const shouldCancel = ({ views }: Show) => views < 1000
const getName = get('name')<Show>

const getCanceledShows = compose([
  keepLastWhile(shouldCancel)<Show[]>,
  mapValues(getName)<Show[]>,
])

const canceledShows = getCanceledShows(shows)
console.log(canceledShows)
/// is [
///   Greg's Grills
///   Let's Brunch
/// ]
