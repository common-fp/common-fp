// assume today is 2025 1 15
const oneYearAgo = new Date('2024 1 15')

const emails = [
  {
    subject: 'Policy renewal',
    received: new Date('2024 1 15'),
  },
  {
    subject: 'Soccer league starting soon',
    received: new Date('2024 1 16'),
  },
]

const shouldArchive = compose([get('received'), isAtOrBefore(oneYearAgo)])
const archive = keepWhen(shouldArchive)
const emailsToArchive = archive(emails)

console.log(emailsToArchive)
/// is [
///   {
///     subject: 'Policy renewal',
///     received: 2024 1 15
///   }
/// ]
