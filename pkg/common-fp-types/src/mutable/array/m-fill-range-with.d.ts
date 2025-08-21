export default function <V>(
  anything: V,
  range: {
    startIdx: number
    endIdx: number
  }
): <A extends V[]>(anArray: A) => A
