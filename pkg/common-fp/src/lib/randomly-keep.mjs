import {
  assertArgIsInt,
  getFn,
  getRandomInt,
} from '@common-fp/shared-internals'

const randomlyKeep = num => {
  assertArgIsInt(num, 'num', 'randomlyKeep', {
    nonNegative: true,
  })

  return collection => {
    const fn = getFn(typeToFn, collection, 'collection', 'randomlyKeep')
    return fn(collection, num)
  }
}

const typeToFn = {
  array: randomlyKeep_array,
  map: randomlyKeep_map,
  object: randomlyKeep_object,
  set: randomlyKeep_set,
}

function randomlyKeep_array(arr, num) {
  const result = []

  let numToTake = num
  const valsToChooseFrom = [...arr]
  while (numToTake > 0 && valsToChooseFrom.length) {
    const randomIdx = getRandomInt(0, valsToChooseFrom.length - 1)
    const pluckedVal = valsToChooseFrom.splice(randomIdx, 1)[0]
    result.push(pluckedVal)
    numToTake -= 1
  }

  return result
}

function randomlyKeep_map(aMap, num) {
  const result = new Map()

  let numToTake = num
  const keysToChooseFrom = [...aMap.keys()]
  while (numToTake > 0 && keysToChooseFrom.length) {
    const idx = getRandomInt(0, keysToChooseFrom.length - 1)
    const randomKey = keysToChooseFrom.splice(idx, 1)[0]
    result.set(randomKey, aMap.get(randomKey))
    numToTake -= 1
  }

  return result
}

function randomlyKeep_object(obj, num) {
  const result = {}

  let numToTake = num
  const keysToChooseFrom = Object.keys(obj)
  while (numToTake > 0 && keysToChooseFrom.length) {
    const idx = getRandomInt(0, keysToChooseFrom.length - 1)
    const randomKey = keysToChooseFrom.splice(idx, 1)[0]
    result[randomKey] = obj[randomKey]
    numToTake -= 1
  }

  return result
}

function randomlyKeep_set(aSet, num) {
  const result = new Set()

  let numToTake = num
  const valsToChooseFrom = [...aSet]
  while (numToTake > 0 && valsToChooseFrom.length) {
    const randomIdx = getRandomInt(0, valsToChooseFrom.length - 1)
    const pluckedVal = valsToChooseFrom.splice(randomIdx, 1)[0]
    result.add(pluckedVal)
    numToTake -= 1
  }

  return result
}

export default randomlyKeep
