type Email = {
  time: string
  subject: string
}
type EmailFolders = Record<string, Email[]>
const emailFolders: EmailFolders = {
  work: [
    { time: '01:15pm', subject: 'Follow up about review' },
    { time: '10:03am', subject: 'Lunch at Arbys?' },
    { time: '08:52am', subject: 'Meeting at 9 cancelled' },
  ],
  daycare: [
    { time: '03:01pm', subject: 'Emma has been great!' },
    { time: '07:39am', subject: 'Bill adjustment approval' },
  ],
}

const preferMostRecentLast = forEach(mReverse<Email[]>)<EmailFolders>
preferMostRecentLast(emailFolders)

console.log(emailFolders)
/// is {
///   work: [
///     {
///        time: 08:52am
///        subject: Meeting at 9 cancelled
///     }, {
///        time: 10:03am
///        subject: Lunch at Arbys?
///     }, {
///        time: 01:15pm
///        subject: Follow up about review
///     }
///   ]
///   daycare: [
///     {
///        time: 07:39am
///        subject: Bill adjustment approval
///     }, {
///        time: 03:01pm
///        subject: Emma has been great!
///     }
///   ]
/// }
