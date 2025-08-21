import type { EntryCollection, UnknownArray } from '@common-fp/shared-types'

export default function <const V>(value: V): <C extends EntryCollection>(
  collection: C
) => C extends UnknownArray ?
  {
    -readonly [K in keyof C]: V
  }
: C extends ReadonlyMap<infer K, unknown> ? Map<K, V>
: { [K in keyof C]: V }
