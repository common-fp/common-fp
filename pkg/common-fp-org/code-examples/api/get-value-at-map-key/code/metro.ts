type Person = { first: string; last: string }

const tom: Person = { first: 'tom', last: 'nelson' }
const ken: Person = { first: 'ken', last: 'roberts' }
const chris: Person = { first: 'chris', last: 'reyes' }

const metroBalance = new Map([
  [tom, '21.95'],
  [ken, '15.30'],
  [chris, '34.50'],
])

const metroSubscriptionStatus = new Map([
  [tom, 'active'],
  [ken, 'paused'],
  [chris, 'active'],
])

type MetroData = {
  balance: Map<Person, string>
  status: Map<Person, string>
}
const metroData: MetroData = {
  balance: metroBalance,
  status: metroSubscriptionStatus,
}

const getTomsValue = getValueAtMapKey(tom)<string>
const getTomsData = mapValues(getTomsValue)<MetroData>
const tomsData = getTomsData(metroData)

console.log(tomsData)
/// is {
///   balance: 21.95
///   status: active
/// }
