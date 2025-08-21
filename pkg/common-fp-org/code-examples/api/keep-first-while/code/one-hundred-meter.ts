type Runner = {
  name: string
  time: number
}

const isSub13m = ({ time }: Runner) => time < 13
const keepSub13Times = keepFirstWhile(isSub13m)

const oneHundredMeterTimes: Runner[] = [
  { name: 'emma', time: 11.2 },
  { name: 'luke', time: 12.8 },
  { name: 'meg', time: 13.5 },
]

const getName = get('name')<Runner>

const getQualifiedRunners = compose([
  keepSub13Times,
  mapValues(getName)<Runner[]>,
])

const qualifiedRunners = getQualifiedRunners(oneHundredMeterTimes)
console.log(qualifiedRunners)
/// is [
///   emma
///   luke
/// ]
