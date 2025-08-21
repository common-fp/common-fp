export default function <A extends readonly unknown[]>(
  ...args: A
): A extends readonly [] ? undefined
: A extends readonly [infer V, ...unknown[]] ? V
: A extends ReadonlyArray<infer V> ? V | undefined
: never
