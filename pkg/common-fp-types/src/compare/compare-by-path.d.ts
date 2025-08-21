import type { IsTuple, UnknownRecord } from '@common-fp/shared-types'

type RecordWithValueAtPath<P extends ReadonlyArray<PropertyKey>, V> =
  P extends readonly [infer F extends PropertyKey] ? { [k in F]: V }
  : P extends (
    readonly [
      infer F extends PropertyKey,
      ...infer R extends ReadonlyArray<PropertyKey>,
    ]
  ) ?
    { [k in F]: RecordWithValueAtPath<R, V> }
  : never
/**
 * note: this library should work in non-tuple cases.  i.e. this utility should
 *   accept a PropertyKey[].  Due to this constraint, we must expose a relaxed
 *   type here.
 */

export default function <const P extends ReadonlyArray<PropertyKey>, V>(
  path: P,
  compareFn: (
    left: Exclude<V, undefined>,
    right: Exclude<V, undefined>
  ) => number
): P extends IsTuple<P> ?
  <O extends RecordWithValueAtPath<P, V>>(left: O, right: O) => number
: <O extends UnknownRecord>(left: O, right: O) => number
