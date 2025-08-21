const newStudents = ['matt', 'jason']
const appendNewStudents = appendAll(newStudents)

const existingStudents = ['amy', 'kim']
const allStudents = appendNewStudents(existingStudents)
console.log(allStudents)
// is ['amy', 'kim', 'matt', 'jason']
