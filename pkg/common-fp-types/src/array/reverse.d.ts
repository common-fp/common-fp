import type { IsNotTuple, UnknownArray } from '@common-fp/shared-types'

// based on code from remeda
// https://github.com/remeda/remeda/blob/37e7fb0963df002b2bc97276c883717bc2b3709c/src/reverse.ts#L3-L14
type Reverse<T extends UnknownArray, R extends UnknownArray = []> =
  T extends IsNotTuple<T> ? [...T, ...R]
  : T extends readonly [infer F, ...infer L] ? Reverse<L, [F, ...R]>
  : R

export default function <const A extends UnknownArray>(anArray: A): Reverse<A>
