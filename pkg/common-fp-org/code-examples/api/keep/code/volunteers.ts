type Volunteers = Record<string, string>
const volunteers = {
  jason: 'saturday',
  amy: 'wednesday',
  kim: 'saturday',
  grace: 'tuesday',
  sam: 'sunday',
}

const keepWeekendHelpers = keep(['saturday', 'sunday'])<Volunteers>
const getWeekendHelpers = compose([keepWeekendHelpers, Object.keys])

const weekendHelpers = getWeekendHelpers(volunteers)
console.log(weekendHelpers)
/// is [
///  jason
///  kim
///  sam
/// ]
