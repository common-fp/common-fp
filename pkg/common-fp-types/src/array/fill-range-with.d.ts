export default function <const V1>(
  value: V1,
  range: {
    startIdx: number
    endIdx: number
  }
): <const V2>(anArray: readonly V2[]) => Array<V1 | V2>
