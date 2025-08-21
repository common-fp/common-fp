// this type is the same as ./m-discard-range.  We're copying it so we don't
// expose a generally named type mAppendOrPrependAll which would be less clear

export default function (range: {
  startIdx: number
  endIdx: number
}): <A extends unknown[]>(anArray: A) => A
