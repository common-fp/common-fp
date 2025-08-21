const secondCousins = ['amy', 'kim']
const cousins = ['matt', 'jason']
const siblings = ['phil', 'mary', 'sarah']
const extendedFamily = [...siblings, [...cousins, [...secondCousins]]]

const isString = element => typeof element === 'string'
const siblingsAndCousins = flattenOnce(extendedFamily).filter(isString)
console.log(siblingsAndCousins)
/// is [
///   phil,
///   mary,
///   sarah,
///   matt,
///   jason,
/// ]
