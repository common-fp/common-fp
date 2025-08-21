const relationships = [
  ['mary', 'sarah'],
  ['matt', 'jason'],
  ['amy', 'kim'],
  ['mary', 'matt'],
  ['jason', 'kim'],
]

const peopleInOneRelationship = getExclusiveValues(relationships)
console.log(peopleInOneRelationship)
/// is [
///   sarah,
///   amy,
/// ]
