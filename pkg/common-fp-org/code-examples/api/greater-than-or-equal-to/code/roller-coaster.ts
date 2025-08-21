type Heights = Record<string, number>
const heights: Heights = {
  sarah: 62,
  matt: 50,
  jason: 58,
  amy: 48,
}

const isTallEnough = greaterThanOrEqualTo(52)
const keepAdmissableRiders = keepWhen(isTallEnough)<Heights>
const getRiders = compose([keepAdmissableRiders, Object.keys])
const riders = getRiders(heights)
console.log(riders)
/// is [
///   sarah,
///   jason,
/// ]
