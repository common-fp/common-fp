const bootsSoldInLastWeek = {
  columbia: 82,
  timberland: 65,
  nortiv: 58,
  keen: 79,
}

const soldOver70 = greaterThan(70)
const getHotSellers = compose([keepWhen(soldOver70), Object.keys])
const hotSellers = getHotSellers(bootsSoldInLastWeek)
console.log(hotSellers)
/// is [
///   columbia,
///   keen,
/// ]
