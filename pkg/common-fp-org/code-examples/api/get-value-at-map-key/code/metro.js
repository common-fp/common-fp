const tom = { first: 'tom', last: 'nelson' }
const ken = { first: 'ken', last: 'roberts' }
const chris = { first: 'chris', last: 'reyes' }

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

const metroData = {
  balance: metroBalance,
  status: metroSubscriptionStatus,
}

const getTomsValue = getValueAtMapKey(tom)
const getTomsData = mapValues(getTomsValue)
const tomsData = getTomsData(metroData)

console.log(tomsData)
/// is {
///   balance: 21.95
///   status: active
/// }
