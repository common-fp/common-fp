const any = predicate => arr => arr.some(predicate)

const append = r => l => l + r

const find = fn => arr => arr.find(fn)

const isFalsey = x => !x

const isEmpty = something => !isLaden(something)

const isLaden = something => {
  if (Array.isArray(something) || typeof something === 'string')
    return !!something.length
  if (something == null) return false
  if (typeof something === 'object') return !!Object.keys(something).length

  throw new Error('unhandled type passed to isLaden\n', something)
}

const last = arr => (arr.length ? arr[arr.length - 1] : undefined)

const mapKeys = fn => obj => {
  const result = {}
  for (const k of Object.keys(obj)) {
    result[fn(obj[k], k, obj)] = obj[k]
  }
  return result
}

const mapValues = fn => obj => {
  const result = {}
  for (const k of Object.keys(obj)) {
    result[k] = fn(obj[k], k, obj)
  }
  return result
}

const passThrough = (arg, fnArr) => {
  let result = arg
  for (const fn of fnArr) {
    result = fn(result)
  }
  return result
}

const peek = fn => resultOfPreviousFunction => {
  fn(resultOfPreviousFunction)

  return resultOfPreviousFunction
}

const pick = keys => obj => {
  const res = {}
  for (const k of keys) {
    res[k] = obj[k]
  }
  return res
}

const prepend = l => r => l + r

const reduce = (fn, initial) => arr => {
  return arr.reduce(fn, initial)
}

const reduceWhile = (predicate, reducer, initial) => arr => {
  let result = initial
  for (let i = 0; i < arr.length; i += 1) {
    if (!predicate(result)) break
    result = reducer(result, arr[i], i, arr)
  }
  return result
}

const returnFirstArg = x => x

const sortBy = fn => arr => arr.toSorted(fn)

const trim = str => str.trim()

export {
  any,
  append,
  find,
  isEmpty,
  isFalsey,
  isLaden,
  last,
  mapKeys,
  mapValues,
  passThrough,
  peek,
  pick,
  prepend,
  reduce,
  reduceWhile,
  returnFirstArg,
  sortBy,
  trim,
}
