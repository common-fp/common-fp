import { mapValues } from 'common-fp'

const giveEveryoneAnApple = mapValues(numApples => numApples + 1)

const applesPerPersonObj = {
  mary: 2,
  sarah: 3,
}

const resultObj = giveEveryoneAnApple(applesPerPersonObj)
show(resultObj)
// a new object {
//   mary: 3
//   sarah: 4
// }
