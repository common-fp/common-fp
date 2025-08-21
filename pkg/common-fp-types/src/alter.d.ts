import type {
  Collection,
  CollectionKey,
  CollectionValue,
} from '@common-fp/shared-types'

declare function alter<
  C1 extends Collection<V, K>,
  R,
  V = unknown,
  K = unknown,
>(
  reducerFn: (result: R, value: V, key: K, collection: C1) => R,
  makeInitial: () => R
): <C2 extends C1>(collection: C2) => R

declare function alter<
  C1 extends Collection,
  R,
  V extends CollectionValue<C1>,
  K extends CollectionKey<C1>,
>(
  reducerFn: (result: R, value: V, key: K, collection: C1) => R,
  makeInitial: (collection: C1) => R
): <C2 extends C1>(collection: C2) => R

export default alter
