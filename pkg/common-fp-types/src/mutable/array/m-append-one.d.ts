// this type is the same as ./m-prepend-one.  We're copying it so we don't
// expose a generally named type mAppendOrPrependOne which would be less clear

export default function mAppendOne<V>(
  value: V
): <A extends V[]>(anArray: A) => A
