import type {
  EntryCollection,
  UnknownArray,
  UnknownFunction,
  UnknownMap,
} from '@common-fp/shared-types'

declare function update<F extends UnknownFunction, K>(
  mapperFns: ReadonlyMap<K, F>
): <C extends UnknownMap>(collection: C) => C

declare function update<F extends UnknownFunction>(
  mapperFns: ReadonlyArray<F>
): <C extends UnknownArray>(collection: C) => C

declare function update<F extends UnknownFunction, K extends PropertyKey>(
  mapperFns: Record<K, F>
): <C extends EntryCollection>(collection: C) => C

export default update
