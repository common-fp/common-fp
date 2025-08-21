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

const accessors = {
  animal: name => animalDirectory[name],
  isMammal: name => {
    const animal = animalDirectory[name]
    return mammalDb.has(animal)
  },
  height: name => animalHeights[name],
}

const getDataFor = name => {
  const invokeWithName = invokeWith(name)
  const getDataForName = mapValues(invokeWithName)
  return getDataForName(accessors)
}

const rosieData = getDataFor('Rosie')
console.log(rosieData)
/// is {
///   animal: Flamingo,
///   isMammal: false,
///   height: 3'9"
/// }
