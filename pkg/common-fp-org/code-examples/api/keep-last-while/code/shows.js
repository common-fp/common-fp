const shows = [
  { name: "Cake'n'Bake", views: 2047 },
  { name: "Greg's Grills", views: 688 },
  { name: "Let's Brunch", views: 512 },
]

const shouldCancel = ({ views }) => views < 1000

const getCanceledShows = compose([
  keepLastWhile(shouldCancel),
  mapValues(get('name')),
])

const canceledShows = getCanceledShows(shows)
console.log(canceledShows)
/// is [
///   Greg's Grills
///   Let's Brunch
/// ]
