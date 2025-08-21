type Times = Record<string, number>
const oneHundredMeterTimes: Times = {
  mary: 12.8,
  sarah: 11.2,
  matt: 13.5,
}

const isSub13m = (time: number) => time < 13
const keepSub13Times = keepWhen(isSub13m)<Times>

const getQualifiedRunners = compose([keepSub13Times, Object.keys])

const qualifiedRunners = getQualifiedRunners(oneHundredMeterTimes)
console.log(qualifiedRunners)
/// is [
///   mary
///   sarah
/// ]
