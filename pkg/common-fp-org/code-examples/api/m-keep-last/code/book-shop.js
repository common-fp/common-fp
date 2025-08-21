const salesByMonth = [
  ['month', 'subscriptions', 'books'],
  ['Jan', 129, 561],
  ['Feb', 98, 523],
  ['Mar', 112, 530],
  ['Apr', 107, 588],
]

const keepMostRecent2Months = mKeepLast(2)
keepMostRecent2Months(salesByMonth)

const format = sales => {
  const [month, subsSold, booksSold] = sales
  return [
    month,
    `  subscriptions: ${subsSold}`,
    `  books:         ${booksSold}`,
  ].join('\n')
}

const createReport = compose([
  mapValues(format),
  prependOne('Sales From Last Two Months'),
  joinValues('\n'),
])
const report = createReport(salesByMonth)

console.log(report)
/// prints
/// Sales From Last Two Months
/// Mar
///   subscriptions: 112
///   books:         530
/// Apr
///   subscriptions: 107
///   books:         588
