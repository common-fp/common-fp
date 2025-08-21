import { compose, get, isAtOrBefore, keepWhen } from 'common-fp'

// assume today is 2025 1 15
const oneYearAgo = new Date('2024 1 15')

type Email = {
  subject: string
  received: Date
}

const emails: Email[] = [
  {
    subject: 'Policy renewal',
    received: new Date('2024 1 15'),
  },
  {
    subject: 'Soccer league starting soon',
    received: new Date('2024 1 16'),
  },
]

const shouldArchive = compose([
  get('received')<Email>,
  isAtOrBefore(oneYearAgo),
])
const archive = keepWhen(shouldArchive)<Email[]>
const emailsToArchive = archive(emails)

show(emailsToArchive)
