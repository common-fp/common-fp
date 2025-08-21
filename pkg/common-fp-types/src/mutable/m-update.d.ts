// this type is the same as ../update.  We're copying it so devs aren't confused
// when they see 'update' instead of 'mUpdate' in the type hint

import type {
  EntryCollection,
  UnknownArray,
  UnknownFunction,
  UnknownMap,
} from '@common-fp/shared-types'

declare function mUpdate<F extends UnknownFunction, K>(
  mapperFns: ReadonlyMap<K, F>
): <C extends UnknownMap>(collection: C) => C

declare function mUpdate<F extends UnknownFunction>(
  mapperFns: ReadonlyArray<F>
): <C extends UnknownArray>(collection: C) => C

declare function mUpdate<F extends UnknownFunction, K extends PropertyKey>(
  mapperFns: Record<K, F>
): <C extends EntryCollection>(collection: C) => C

export default mUpdate
