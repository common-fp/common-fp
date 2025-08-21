const pluginApi = {
  canMessage: user => user.status === 'active',
  updateUsers: (updateFn, predicate) => {
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
  ],
}

const cannotMessage = negate(pluginApi.canMessage)
const addTooltip = mSet('tooltip', 'cannot message this user')

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
