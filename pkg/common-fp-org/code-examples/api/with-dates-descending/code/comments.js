const comments = [
  {
    text: 'Looks like a fun time by the lake',
    upvotes: 5,
    posted: new Date('2025 03 15'),
  },
  {
    text: 'Wish I was there!',
    upvotes: 8,
    posted: new Date('2025 03 17'),
  },
  {
    text: ':)',
    upvotes: 2,
    posted: new Date('2025 03 16'),
  },
]

const byPostedDescending = compareByProp('posted', withDatesDescending)
const orderComments = order(byPostedDescending)
const udpatedComments = orderComments(comments)
console.log(udpatedComments)
/// is [
///   {
///     text: Wish I was there!
///     upvotes: 8
///     posted: 2025 03 17
///   }
///   {
///     text: :)
///     upvotes: 2
///     posted: 2025 03 16
///   }
///   {
///     text: Looks like a fun time by the lake
///     upvotes: 5
///     posted: 2025 03 15
///   }
/// ]
