// this type is the same as ./m-discard-first-while. and the ./m-keep-*-while
// definitions.  We're copying them to expose their function definitions on
// mouse-over instead of a less intuitive, generally named alias.

declare function mDiscardLastWhile<V>(
  predicate: (value: V, idx: number) => boolean
): <A extends V[]>(anArray: A) => A

declare function mDiscardLastWhile<V, A1 extends V[]>(
  predicate: (value: V, idx: number, anArray: A1) => boolean
): <A2 extends A1>(anArray: A2) => A2

export default mDiscardLastWhile
