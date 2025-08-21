export default function mSetAtPath(
  path: readonly PropertyKey[],
  value: unknown
): <O>(anything: O) => O
