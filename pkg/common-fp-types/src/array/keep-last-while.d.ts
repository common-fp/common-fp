// this type is the same as ./keep-first-while and the ./discard-*-while
// definitions.  We're copying them to expose their function definitions on
// mouse-over instead of a less intuitive, generally named alias.

export default function <V, A1 extends readonly V[]>(
  predicate: (value: V, idx: number, anArray: A1) => boolean
): <const A2 extends A1>(anArray: A2) => A2[number][]
