const isSub13m = ({ time }) => time < 13
const keepSub13Times = keepFirstWhile(isSub13m)

const oneHundredMeterTimes = [
  { name: 'emma', time: 11.2 },
  { name: 'luke', time: 12.8 },
  { name: 'meg', time: 13.5 },
]

const getQualifiedRunners = compose([keepSub13Times, mapValues(get('name'))])

const qualifiedRunners = getQualifiedRunners(oneHundredMeterTimes)
console.log(qualifiedRunners)
/// is [
///   emma
///   luke
/// ]
