const appointments = {
  Monday: [],
  Tuesday: [
    {
      time: '8am-9:30',
      client: "Baz's Baby Furniture",
    },
    {
      time: '11am-12',
      client: 'University Of Florida',
    },
  ],
}

const displayOneAppt = ({ time, client }) => {
  return `  At: ${time}\n` + `  With: ${client}`
}

const displayDayAppts = (appts, day) => {
  if (isEmpty(appts)) return day + ': None'

  const dayAppts = appts.map(displayOneAppt).join('\n\n')
  return `${day}:\n` + dayAppts
}

const displayAllDayAppts = compose([
  mapValues(displayDayAppts),
  joinValues('\n\n'),
])

const apptDisplay = displayAllDayAppts(appointments)
console.log(apptDisplay)
/// prints
/// Monday: None
///
/// Tuesday:
///   At: 8am-9:30
///   With: Baz's Baby Furniture
///
///   At: 11am-12
///   With: University Of Florida
