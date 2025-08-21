// this type is the same as ./m-discard-first and the ./m-keep-(last|first)
// definitions.  We're copying them to expose their function definitions on
// mouse-over instead of a less intuitive, generally named alias.

export default function (
  numToDiscard: number
): <A extends unknown[]>(anArray: A) => A
