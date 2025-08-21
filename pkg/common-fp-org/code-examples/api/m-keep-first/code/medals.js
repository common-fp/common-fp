const canoeSlalomResults = [
  { name: 'jessica', time: 101.06 },
  { name: 'elena', time: 103.54 },
  { name: 'evy', time: 109.95 },
  { name: 'zuzana', time: 111.07 },
  { name: 'ana', time: 112.7 },
]

const keepMedalists = mKeepFirst(3)
keepMedalists(canoeSlalomResults)
const getNames = mapValues(get('name'))
const medalists = getNames(canoeSlalomResults)
console.log(medalists)
/// is [
///  jessica
///  elena
///  evy
/// ]
