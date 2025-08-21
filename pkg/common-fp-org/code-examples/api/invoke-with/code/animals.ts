type Name = keyof typeof animalDirectory
const animalDirectory = {
  Marty: 'Zebra',
  Perry: 'Platypus',
  Rosie: 'Flamingo',
}
const mammalDb = new Set(['Zebra', 'Platypus'])
const animalHeights = {
  Marty: `4'2"`,
  Perry: `1'10"`,
  Rosie: `3'9"`,
}

type Accessors = typeof accessors
const accessors = {
  animal: (name: Name) => animalDirectory[name],
  isMammal: (name: Name) => {
    const animal = animalDirectory[name]
    return mammalDb.has(animal)
  },
  height: (name: Name) => animalHeights[name],
}

type AccessorKeys = keyof Accessors
type Data = {
  [K in AccessorKeys]: ReturnType<Accessors[K]>
}
const getDataFor = (name: Name): Data => {
  const invokeWithName = invokeWith([name] as const)
  const getDataForName = mapValues(invokeWithName<string | boolean>)<Accessors>
  return getDataForName(accessors) as Data
}

const rosieData = getDataFor('Rosie')
console.log(rosieData)
/// is {
///   animal: Flamingo,
///   isMammal: false,
///   height: 3'9"
/// }
