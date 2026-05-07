const discardLast = n => arr => arr.slice(0, -n)

const join = separator => arr => arr.join(separator)

const passThrough = (val, fnArr) => fnArr.reduce((res, fn) => fn(res), val)

const peek = fn => val => {
  fn(val)
  return val
}

const pMapValues = fn => async collection => Promise.all(collection.map(fn))

const pPassThrough = async (val, fnArr) => {
  let result = await val
  for (const fn of fnArr) {
    result = await fn(result)
  }
  return result
}

const pResolveValues = async obj => {
  const vals = await Promise.all(Object.values(obj))
  return Object.keys(obj).reduce((res, key, idx) => {
    res[key] = vals[idx]
    return res
  }, {})
}

const reduce = (fn, initial) => collection => collection.reduce(fn, initial)

const split = separator => str => str.split(separator)

export {
  discardLast,
  join,
  passThrough,
  peek,
  pMapValues,
  pPassThrough,
  pResolveValues,
  reduce,
  split,
}
