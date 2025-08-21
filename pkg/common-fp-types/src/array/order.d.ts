export default function <V1>(
  compareFn: (left: V1, right: V1) => number
): <V2 extends V1>(anArray: readonly V2[]) => V2[]
