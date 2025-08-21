const topBilledCast = [
  { name: 'Matthew McConaughey' },
  { name: 'Woody Harrelson' },
  { name: 'Michelle Monaghan' },
  { name: 'Michael Potts' },
  { name: 'Tory Kittles' },
]

const flagLead = mSet('isLead', true)
const leads = new Set(['Matthew McConaughey', 'Woody Harrelson'])
const isLead = actor => leads.has(actor.name)
const flagAllLeads = compose([keepWhen(isLead), forEach(flagLead)])
flagAllLeads(topBilledCast)

console.log(topBilledCast)
/// is [
///   { name: Matthew McConaughey, isLead: true }
///   { name: Woody Harrelson, isLead: true }
///   { name: Michelle Monaghan }
///   { name: Michael Potts }
///   { name: Tory Kittles }
/// ]
