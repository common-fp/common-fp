import type { Collection, WithValueType } from '@common-fp/shared-types'

export default function <
  VAfter,
  C1 extends Collection<VBefore, K>,
  VBefore = unknown,
  K = unknown,
>(
  mapperFn: (value: VBefore, key: K, collection: C1) => Promise<VAfter>
): <C2 extends C1>(collection: C2) => Promise<WithValueType<C2, VAfter>>
