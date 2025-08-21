const schedule = [
  'closed',
  ['10am-12'],
  [],
  ['8am-9', '10:30am-11:30'],
  ['1pm-2:30'],
  ['2pm-3'],
  'closed',
]

const monThroughWed = { startIdx: 1, endIdx: 3 }
const close = fillRangeWith('closed', monThroughWed)
const updatedSchedule = close(schedule)
console.log(updatedSchedule)
/// is
/// [
///   'closed',
///   'closed',
///   'closed',
///   'closed',
///   ['1pm-2:30'],
///   ['2pm-3'],
///   'closed',
/// ]
