type User = {
  email: string
  status: string
  tooltip?: string
}
type Predicate = (user: User) => boolean
type UpdateFn = (user: User) => void

const pluginApi = {
  canMessage: (user: User) => user.status === 'active',
  updateUsers: (updateFn: UpdateFn, predicate: Predicate) => {
    pluginApi._users.filter(predicate).forEach(updateFn)
  },
  _users: [
    {
      email: 'matt@example.com',
      status: 'away',
    },
    {
      email: 'jason@example.com',
      status: 'active',
    },
  ] as User[],
}

const cannotMessage = negate(pluginApi.canMessage)
const addTooltip = mSet('tooltip', 'cannot message this user')<User>

pluginApi.updateUsers(addTooltip, cannotMessage)

console.log(pluginApi._users)
/// is [
///   {
///     email: matt@example.com
///     status: away
///     tooltip: cannot message this user
///   }
///   {
///     email: jason@example.com
///     status: active
///   }
/// ]
