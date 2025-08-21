type Result = {
  name: string
  time: number
}

const canoeSlalomResults: Result[] = [
  { name: 'jessica', time: 101.06 },
  { name: 'elena', time: 103.54 },
  { name: 'evy', time: 109.95 },
  { name: 'zuzana', time: 111.07 },
  { name: 'ana', time: 112.7 },
]

const keepMedalists = mKeepFirst(3)<Result[]>
keepMedalists(canoeSlalomResults)
const getName = get('name')<Result>
const getAllNames = mapValues(getName)<Result[]>
const medalists = getAllNames(canoeSlalomResults)
console.log(medalists)
/// is [
///  jessica
///  elena
///  evy
/// ]
