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
  Wednesday: [],
  Thursday: [],
  Friday: [
    {
      time: '9am-10',
      client: 'RVs R Us',
    },
  ],
}

const displayOneAppt = ({ time, client }) => {
  return `  At: ${time}\n` + `  With: ${client}`
}

const displayDayAppts = (appts, day) => {
  const dayAppts = appts.map(displayOneAppt).join('\n\n')
  return `${day}:\n` + dayAppts
}

const displayAllDayAppts = compose([
  keepWhen(isLaden),
  mapValues(displayDayAppts),
  joinValues('\n\n'),
])

const apptDisplay = displayAllDayAppts(appointments)
console.log(apptDisplay)
/// prints
/// Tuesday:
///   At: 8am-9:30
///   With: Baz's Baby Furniture
///
///   At: 11am-12
///   With: University Of Florida
///
/// Friday:
///   At: 9am-10
///   With: RVs R Us
