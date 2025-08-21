const emailFolders = {
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

const preferMostRecentLast = mapValues(reverse)
const updatedFolders = preferMostRecentLast(emailFolders)

console.log(updatedFolders)
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
