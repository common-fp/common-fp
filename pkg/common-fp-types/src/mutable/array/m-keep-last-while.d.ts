// this type is the same as ./m-keep-first-while. and the ./m-discard-*-while
// definitions.  We're copying them to expose their function definitions on
// mouse-over instead of a less intuitive, generally named alias.

declare function mKeepLastWhile<V>(
  predicate: (value: V, idx: number) => boolean
): <A extends V[]>(anArray: A) => A

declare function mKeepLastWhile<V, A1 extends V[]>(
  predicate: (value: V, idx: number, anArray: A1) => boolean
): <A2 extends A1>(anArray: A2) => A2

export default mKeepLastWhile
