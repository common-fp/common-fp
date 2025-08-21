type Account = {
  id: string
  email: string
}
type Directory = Record<string, Account>
const accountsById: Directory = {
  j0N7: { id: 'j0N7', email: 'tom@example.com' },
  b5sS: { id: 'b5sS', email: 'ken@example.com' },
  yjdk: { id: 'yjdk', email: 'chris@example.com' },
}

const getEmail = get('email')<Account>
const mapToEmailKeys = mapKeys(getEmail)<Directory>
const accountsByEmail = mapToEmailKeys(accountsById)

console.log(accountsByEmail)
/// is {
///   tom@example.com: {
///     id: j0N7
///     email: tom@example.com
///   }
///   ken@example.com: {
///     id: b5sS
///     email: ken@example.com
///   }
///   chris@example.com: {
///     id: yjdk
///     email: chris@example.com
///   }
/// }
