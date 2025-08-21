type Account = {
  email: string
  preferences: { mode: string }
}
const account: Account = {
  email: 'meg@example.com',
  preferences: {
    mode: 'light',
  },
}

const setDarkMode = mSetAtPath(['preferences', 'mode'], 'dark')<Account>
setDarkMode(account)

console.log(account)
/// is {
///   email: meg@example.com
///   preferences: {
///     mode: dark
///   }
/// }
