type Photo = {
  name: string
  created: Date
}

const photos: Photo[] = [
  {
    name: 'tom - camping.jpg',
    created: new Date('2025 03 06'),
  },
  {
    name: 'chris - with the cats.jpg',
    created: new Date('2025 02 15'),
  },
  {
    name: 'ken - garden.jpg',
    created: new Date('2025 02 02'),
  },
  {
    name: 'tom - chillin.jpg',
    created: new Date('2025 03 09'),
  },
  {
    name: 'chris - soccer.jpg',
    created: new Date('2025 02 21'),
  },
]

const byNameAsc = compareByProp('name', withStringsAscending)<Photo>
const orderPhotos = order(byNameAsc)
const orderedNames = orderPhotos(photos).map(get('name'))
console.log(orderedNames)
/// is [
///   chris - soccer.jpg
///   chris - with the cats.jpg
///   ken - garden.jpg
///   tom - camping.jpg
///   tom - chillin.jpg
/// ]
