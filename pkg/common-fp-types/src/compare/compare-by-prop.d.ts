export default function <K extends PropertyKey, V>(
  key: K,
  compareFn: (left: V, right: V) => number
): <O extends Record<K, V>>(left: O, right: O) => number
