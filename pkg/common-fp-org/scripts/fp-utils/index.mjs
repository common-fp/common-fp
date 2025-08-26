const compose =
  fnArr =>
  (...args) => {
    if (!fnArr.length) return args[0]

    let result = fnArr[0](...args)
    for (const fn of fnArr.slice(1)) {
      result = fn(result)
    }
    return result
  }

const discardArr = vals => {
  const setOfVals = new Set(vals)

  return arr => {
    const result = []
    for (const el of arr) {
      if (!setOfVals.has(el)) result.push(el)
    }
    return result
  }
}

const isEmpty = something => {
  if (Object.hasOwn(something, 'length')) return !something.length
  if ('size' in something) return !something.size
  return !Object.keys(something).length
}

const mapKeysMap = mapperFn => aMap => {
  const result = new Map()
  for (const [k, v] of aMap) {
    result.set(mapperFn(v, k, aMap), v)
  }
  return result
}

const mapValuesArr = mapperFn => arr => {
  const result = new Array(arr.length)
  for (let i = 0; i < arr.length; i += 1) {
    result[i] = mapperFn(arr[i], i, arr)
  }
  return result
}

const mDiscardWhenMap = shouldDiscard => aMap => {
  for (const [k, v] of aMap) {
    if (shouldDiscard(v, k, aMap)) {
      aMap.delete(k)
    }
  }
  return aMap
}

const mMapValuesMap = mapperFn => aMap => {
  for (const [k, v] of aMap) {
    aMap.set(k, mapperFn(v, k, aMap))
  }
  return aMap
}

const passThrough = (val, fnArr) => {
  let result = val
  for (const fn of fnArr) {
    result = fn(result)
  }
  return result
}

const peek = fn => val => {
  fn(val)
  return val
}

const pMapValuesMap = mapperFn => async aMap => {
  const result = new Map()
  await Promise.all(
    [...aMap].map(async ([key, val]) => {
      result.set(key, await mapperFn(val, key, aMap))
    })
  )

  return result
}

const pPassThrough = async (val, fnArr) => {
  let result = val
  for (const fn of fnArr) {
    result = await fn(result)
  }
  return result
}

const prepend = prefix => base => prefix + base

const prependOne = val => arr => [val, ...arr]

const waitMs = ms => new Promise(resolve => setTimeout(resolve, ms))

export {
  compose,
  discardArr,
  isEmpty,
  mapKeysMap,
  mapValuesArr,
  mDiscardWhenMap,
  mMapValuesMap,
  passThrough,
  peek,
  pMapValuesMap,
  pPassThrough,
  prepend,
  prependOne,
  waitMs,
}
