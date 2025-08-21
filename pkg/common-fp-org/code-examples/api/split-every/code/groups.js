const students = ['mike', 'luke', 'emma', 'meg', 'tom']
const createGroupsOf3 = compose([shuffle, splitEvery(3)])

const groups = createGroupsOf3(students)
console.log(groups)
/// is [
///   [group of 3]
///   [group of 2]
/// ]
