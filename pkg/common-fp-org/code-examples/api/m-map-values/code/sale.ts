type Products = Record<string, number>
const soccerProducts: Products = {
  soccerBall: 12.98,
  shinGuards: 9.94,
  cleats: 49.99,
}

const getSalePrice = compose([multiplyBy(0.8), roundToNearest('0.01')])
const applySale = mMapValues(getSalePrice)<Products>
applySale(soccerProducts)
console.log(soccerProducts)
/// is {
///   soccerBall: 10.38
///   shinGuards: 7.95
///   cleats: 39.99
/// }
