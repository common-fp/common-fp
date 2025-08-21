export default function (
  key: PropertyKey,
  val: unknown
): <O extends object>(anObject: O) => O
