const account = {
  email: 'meg@example.com',
  preferences: {
    mode: 'light',
  },
}

const setDarkMode = mSetAtPath(['preferences', 'mode'], 'dark')
setDarkMode(account)

console.log(account)
/// is {
///   email: meg@example.com
///   preferences: {
///     mode: dark
///   }
/// }
