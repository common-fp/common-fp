// Type Predicate Case
// accounts for the common case of providing a data type as the first argument
// and determining whether its type can be narrowed
declare function negate<T, S extends T, A extends unknown[]>(
  predicate: (data: T, ...args: A) => data is S
): (data: T, ...args: A) => data is Exclude<T, S>

// General Case
declare function negate<A extends unknown[]>(
  predicate: (...args: A) => boolean
): (...args: A) => boolean

export default negate
