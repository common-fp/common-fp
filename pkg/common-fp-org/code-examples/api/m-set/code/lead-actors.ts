type Actor = {
  name: string
  isLead?: true
}
const topBilledCast: Actor[] = [
  { name: 'Matthew McConaughey' },
  { name: 'Woody Harrelson' },
  { name: 'Michelle Monaghan' },
  { name: 'Michael Potts' },
  { name: 'Tory Kittles' },
]

const flagLead = mSet('isLead', true)<Actor>
const leads = new Set(['Matthew McConaughey', 'Woody Harrelson'])
const isLead = (actor: Actor) => leads.has(actor.name)
const flagAllLeads = compose([
  keepWhen(isLead)<Actor[]>,
  forEach(flagLead)<Actor[]>,
])
flagAllLeads(topBilledCast)

console.log(topBilledCast)
/// is [
///   { name: Matthew McConaughey, isLead: true }
///   { name: Woody Harrelson, isLead: true }
///   { name: Michelle Monaghan }
///   { name: Michael Potts }
///   { name: Tory Kittles }
/// ]
