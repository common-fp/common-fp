import type { ValueAtPath } from '@common-fp/shared-types'

export default function <const P extends readonly PropertyKey[]>(
  path: P
): <const A>(anything: A) => ValueAtPath<A, P>
