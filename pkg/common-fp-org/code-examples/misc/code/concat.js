const newStudents = ['matt', 'jason']

// I feel it's unintuitive for allStudents1 to match allStudents2
const allStudents1 = newStudents.concat(['amy', 'kim'])
const allStudents2 = newStudents.concat('amy', ['kim'])

console.log('allStudents1', allStudents1)
console.log('allStudents2', allStudents2)
/// are both [
///   matt
///   jason
///   amy
///   kim
/// ]
