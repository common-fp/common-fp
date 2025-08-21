export default function <R = unknown>(
  fn: (prevResult: R) => void
): (prevResult: R) => R
