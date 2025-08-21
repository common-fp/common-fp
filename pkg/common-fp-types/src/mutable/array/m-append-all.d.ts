// this type is the same as ./m-prepend-all.  We're copying it so we don't
// expose a generally named type mAppendOrPrependAll which would be less clear

export default function <V>(
  appended: readonly V[]
): <A extends V[]>(base: A) => A
