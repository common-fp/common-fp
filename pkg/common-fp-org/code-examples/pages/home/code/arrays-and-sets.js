const capitalize = str => str[0].toUpperCase() + str.slice(1)
const capitalizeAll = mapValues(capitalize)

const peopleArr = ['kim', 'grace']
const resultArr = capitalizeAll(peopleArr)
console.log(resultArr)
/// a new array [
///   'Kim',
///   'Grace',
/// ]

const peopleSet = new Set(['kim', 'grace'])
const resultSet = capitalizeAll(peopleSet)
console.log(resultSet)
/// a new Set [
///   'Kim',
///   'Grace',
/// ]
