const teamsByPlacement = [
  'Manchester United',
  'Tottenham Hotspur',
  'West Ham United',
  'Ipswich Town',
  'Leicester City',
  'Southampton',
]

const getRelegatedTeams = keepLast(3)
const relegatedTeams = getRelegatedTeams(teamsByPlacement)
console.log(relegatedTeams)
/// is [
///   Ipswich Town
///   Leicester City
///   Southampton
/// ]
