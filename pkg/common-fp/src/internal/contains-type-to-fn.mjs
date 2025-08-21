const containsTypeToFn = {
  array: contains_includes,
  map: contains_map,
  object: contains_object,
  set: contains_set,
  string: contains_string,
}

function contains_includes(arr, val) {
  return arr.includes(val)
}

function contains_map(aMap, val) {
  for (const v of aMap.values()) {
    if (v === val) return true
  }

  return false
}

function contains_object(obj, val) {
  return Object.values(obj).includes(val)
}

function contains_set(aSet, val) {
  return aSet.has(val)
}

function contains_string(str, val) {
  return str.includes(val)
}

export default containsTypeToFn
