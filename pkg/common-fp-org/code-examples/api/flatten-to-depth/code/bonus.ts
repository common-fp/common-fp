const managers = ['meg', 'tom', 'ken']
const vicePresidents = ['mike', 'luke', 'emma']
const cSuite = ['sam', 'jen']
const ceo = 'grace'

type CorporateTiers = (string | CorporateTiers)[]
const corporateTiers: CorporateTiers = [
  ceo,
  [...cSuite, [...vicePresidents, [...managers]]],
]

const isString = (node: string | CorporateTiers) => typeof node === 'string'
const flattenToVPs = flattenToDepth(2)
const employeesWhoGetBonuses = flattenToVPs(corporateTiers).filter(isString)
console.log(employeesWhoGetBonuses)
/// is [
///   grace,
///   sam,
///   jen,
///   mike,
///   luke,
///   emma,
/// ]
