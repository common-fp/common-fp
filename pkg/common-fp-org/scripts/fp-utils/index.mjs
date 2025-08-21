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

const waitMs = ms => new Promise(resolve => setTimeout(resolve, ms))

export {
  isEmpty,
  mapKeysMap,
  mDiscardWhenMap,
  mMapValuesMap,
  passThrough,
  peek,
  pMapValuesMap,
  waitMs,
}
