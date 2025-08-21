const managers = ['meg', 'tom', 'ken']
const vicePresidents = ['mike', 'luke', 'emma']
const cSuite = ['sam', 'jen']
const ceo = 'grace'

const corporateTiers = [ceo, [...cSuite, [...vicePresidents, [...managers]]]]

const isString = element => typeof element === 'string'
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
