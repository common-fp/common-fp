import type {
  EntryCollection,
  UnknownArray,
  UnknownFunction,
  UnknownMap,
} from '@common-fp/shared-types'

declare function update<F extends UnknownFunction, K>(
  mapperFns: ReadonlyMap<K, F>
): <CIn extends UnknownMap, COut extends UnknownMap = CIn>(
  collection: CIn
) => COut

declare function update<F extends UnknownFunction>(
  mapperFns: ReadonlyArray<F>
): <CIn extends UnknownArray, COut extends UnknownArray = CIn>(
  collection: CIn
) => COut

declare function update<F extends UnknownFunction, K extends PropertyKey>(
  mapperFns: Record<K, F>
): <CIn extends EntryCollection, COut extends EntryCollection = CIn>(
  collection: CIn
) => COut

export default update
