type HoursAvailable = Record<string, number[]>
const hoursAvailable = {
  liz: [7, 8, 9, 10],
  phil: [7, 9, 10, 11],
  mary: [8, 9, 10],
}

const getPotentialMeetingTimes = compose([
  getValues<HoursAvailable>,
  getCommonValues<number>,
])
const potentialMeetingTimes = getPotentialMeetingTimes(hoursAvailable)
console.log(potentialMeetingTimes)
/// is [
///   9,
///   10,
/// ]
