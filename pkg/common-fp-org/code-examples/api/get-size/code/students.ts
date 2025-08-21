type Classrooms = Record<string, string[]>
const classrooms = {
  A: ['grace', 'sam', 'jen'],
  B: ['mike', 'luke', 'emma', 'meg'],
}

const getClassroomSizes = mapValues(getSize<string[]>)<Classrooms>
const getNumStudents = compose([getClassroomSizes, sumValues])
const numStudents = getNumStudents(classrooms)
console.log(numStudents)
// is 7
