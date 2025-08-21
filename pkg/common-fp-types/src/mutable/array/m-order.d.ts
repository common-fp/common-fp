export default function <V>(
  compareFn: (left: V, right: V) => number
): <A extends V[]>(anArray: A) => A
