const volunteers = {
  jason: 'saturday',
  amy: 'wednesday',
  kim: 'saturday',
  grace: 'tuesday',
  sam: 'sunday',
}

const keepWeekendHelpers = keep(['saturday', 'sunday'])
const getWeekendHelpers = compose([keepWeekendHelpers, Object.keys])

const weekendHelpers = getWeekendHelpers(volunteers)
console.log(weekendHelpers)
/// is [
///  jason
///  kim
///  sam
/// ]
