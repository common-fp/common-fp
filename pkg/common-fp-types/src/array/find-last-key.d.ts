export default function <V, A1 extends readonly V[]>(
  predicate: (value: V, idx: number, anArray: A1) => boolean
): <A2 extends A1>(anArray: A2) => number | undefined
