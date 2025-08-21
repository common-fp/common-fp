const dinner = {
  pizzaSlices: 6,
  sodas: 2,
  brownies: 4,
}

const shareItem = divideBy(2)
const shareDinner = mapValues(shareItem)

const dinnerPerPerson = shareDinner(dinner)
console.log(dinnerPerPerson)
/// is {
///   pizzaSlices: 3,
///   sodas: 1,
///   brownies: 2,
/// }
