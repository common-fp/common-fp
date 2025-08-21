import { mapValues } from 'common-fp'

const giveEveryoneAnApple = mapValues(numApples => numApples + 1)

const applesPerPersonObj = {
  jason: 2,
  amy: 3,
}

const resultObj = giveEveryoneAnApple(applesPerPersonObj)
console.log(resultObj)
/// a new object {
///   jason: 3,
///   amy: 4,
/// }
