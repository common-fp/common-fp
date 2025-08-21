const defaultToTeddy = defaultFalseyValTo('Teddy')
const defaultNameToTeddy = update({ name: defaultToTeddy })

const bearsToBuild = [
  {
    name: '',
    shirt: 'blue',
  },
  {
    name: 'Winnie',
    shirt: 'red',
  },
  {
    name: undefined,
    shirt: 'purple',
  },
]

const defaultAllNames = mapValues(defaultNameToTeddy)
const updatedBears = defaultAllNames(bearsToBuild)

console.log(updatedBears)
/// [
///   {
///     name: Teddy
///     shirt: blue
///   }, {
///     name: Winnie
///     shirt: red
///   }, {
///     name: Teddy
///     shirt: purple
///   }
/// ]
