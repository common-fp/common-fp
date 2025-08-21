const secondCousins = ['amy', 'kim']
const cousins = ['matt', 'jason']
const siblings = ['phil', 'mary', 'sarah']

type FamilyTree = (string | FamilyTree)[]
const extendedFamily: FamilyTree = [
  ...siblings,
  [...cousins, [...secondCousins]],
]

const isString = (node: string | FamilyTree) => typeof node === 'string'
const siblingsAndCousins = flattenOnce(extendedFamily).filter(isString)
console.log(siblingsAndCousins)
/// is [
///   phil,
///   mary,
///   sarah,
///   matt,
///   jason,
/// ]
