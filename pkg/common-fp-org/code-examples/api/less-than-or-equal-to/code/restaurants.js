const restaurantsNearMe = {
  'Pizza Johns': 1.2,
  'El Taco': 2.1,
  'Salads Galore': 1.5,
}

const isWalkable = lessThanOrEqualTo(1.5)
const getWalkableRestaurants = compose([keepWhen(isWalkable), Object.keys])

const results = getWalkableRestaurants(restaurantsNearMe)
console.log(results)
/// [
///   Pizza Johns
///   Salads Galore
/// ]
