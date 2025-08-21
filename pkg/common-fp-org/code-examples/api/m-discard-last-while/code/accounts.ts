type Account = {
  id: string
  lastActive: string
}

const accounts: Account[] = [
  { id: 'ken@example.com', lastActive: '2024 2 16' },
  { id: 'chris@example.com', lastActive: '2024 2 15' },
  { id: 'liz@example.com', lastActive: '2024 2 15' },
]

const yearAgo = new Date('2024 2 15')
const beenInactiveForAYear = ({ lastActive }: Account) => {
  const lastActiveDate = new Date(lastActive)
  return lastActiveDate <= yearAgo
}
const discardInactiveAccounts = mDiscardLastWhile(beenInactiveForAYear)
discardInactiveAccounts(accounts)
console.log(accounts)
/// is [{
///   id: ken@example.com
///   lastActive: 2024 2 16
/// }]
