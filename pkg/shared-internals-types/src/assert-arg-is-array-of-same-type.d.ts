import type { ArrayOfSameType } from '@common-fp/shared-types'

export default function <V>(
  arg: ArrayOfSameType<V>,
  argName: string,
  acceptedTypes: readonly string[] | ReadonlySet<string>,
  utilName: string
): void
