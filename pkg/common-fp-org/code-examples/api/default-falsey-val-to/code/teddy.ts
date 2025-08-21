type Bear = {
  name?: string
  shirt: string
}

const defaultToTeddy = defaultFalseyValTo('Teddy')
const defaultNameToTeddy = update({ name: defaultToTeddy })<Bear>

const bearsToBuild: Bear[] = [
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

const defaultAllNames = mapValues(defaultNameToTeddy)<Bear[]>
const updatedBears = defaultAllNames(bearsToBuild)

console.log(updatedBears)
/// [
///   { name: Teddy, shirt: blue },
///   { name: Winnie, shirt: red },
///   { name: Teddy, shirt: purple },
/// ]
