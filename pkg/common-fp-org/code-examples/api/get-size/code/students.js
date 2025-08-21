const classrooms = {
  A: ['grace', 'sam', 'jen'],
  B: ['mike', 'luke', 'emma', 'meg'],
}

const getClassroomSizes = mapValues(getSize)
const getNumStudents = compose([getClassroomSizes, sumValues])
const numStudents = getNumStudents(classrooms)
console.log(numStudents)
// is 7
