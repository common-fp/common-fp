const scooterRatings = {
  s52: 3.4,
  s14: 4.0,
  s67: 3.8,
}

const lessThan4Stars = lessThan(4)
const getScootersToInspect = compose([keepWhen(lessThan4Stars), Object.keys])

const scooterIds = getScootersToInspect(scooterRatings)
console.log(scooterIds)
/// [
///   s52
///   s67
/// ]
