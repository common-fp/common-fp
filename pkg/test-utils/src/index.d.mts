// from test-utils, objToMap is the only one I needed in my type tests.

declare function objToMap<K extends string | number, V>(
  obj: Record<K, V>
): Map<K, V>

export { objToMap }
