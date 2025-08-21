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

const leads = new Set(['Matthew McConaughey', 'Woody Harrelson'])
const flagLead = set('isLead', true)<Actor>
const updateActor = (actor: Actor) => {
  return leads.has(actor.name) ? flagLead(actor) : actor
}
const flagAllLeads = mapValues(updateActor)<Actor[]>
const updatedCast = flagAllLeads(topBilledCast)

console.log(updatedCast)
/// is [
///   { name: Matthew McConaughey, isLead: true }
///   { name: Woody Harrelson, isLead: true }
///   { name: Michelle Monaghan }
///   { name: Michael Potts }
///   { name: Tory Kittles }
/// ]
