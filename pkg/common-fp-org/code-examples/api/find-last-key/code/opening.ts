const dayOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']

const appointmentsByDay = [
  ['9am-10', '11am-12', '1:30pm-3'],
  ['8:30am-10', '1pm-2', '2:30pm-3:30'],
  [],
  ['9:30am-10:30', '2pm-3'],
  ['8am-10', '11am-12', '1pm-3'],
]

const hasOpening = (appts: string[]) => appts.length < 3
const findLastOpening = findLastKey(hasOpening)
const lastOpeningIdx = findLastOpening(appointmentsByDay)
const lastOpeningDay = dayOfWeek[lastOpeningIdx!]

console.log(lastOpeningDay)
// is thursday
