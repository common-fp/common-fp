// this type is the same as ./m-append-one.  We're copying it so we don't expose
// a generally named type mAppendOrPrependOne which would be less clear

export default function <V>(val: V): <A extends V[]>(anArray: A) => A
