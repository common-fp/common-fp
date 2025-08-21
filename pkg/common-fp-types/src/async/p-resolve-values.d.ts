import type {
  Collection,
  CollectionValue,
  UnknownMap,
  UnknownSet,
  WithValueType,
} from '@common-fp/shared-types'

export default function <C extends Collection>(
  collection: C
): C extends UnknownMap | UnknownSet ?
  Promise<WithValueType<C, Awaited<CollectionValue<C>>>>
: Promise<{ -readonly [K in keyof C]: Awaited<C[K]> }>
