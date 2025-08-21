type BootSales = Record<string, number>
const bootsSoldInLastWeek = {
  columbia: 82,
  timberland: 65,
  nortiv: 58,
  keen: 79,
}

const soldOver70 = greaterThan(70)
const keepHotSellers = keepWhen(soldOver70)<BootSales>
const getHotSellers = compose([keepHotSellers, Object.keys])
const hotSellers = getHotSellers(bootsSoldInLastWeek)
console.log(hotSellers)
/// is [
///   columbia,
///   keen,
/// ]
