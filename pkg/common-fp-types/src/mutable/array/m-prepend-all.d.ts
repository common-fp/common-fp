// this type is the same as ./m-append-all.  We're copying it so we don't expose
// a generally named type mAppendOrPrependAll which would be less clear

export default function <V>(val: readonly V[]): <A extends V[]>(anArray: A) => A
