import type { Collection } from '@common-fp/shared-types'

export default function (
  separator: string
): <C extends Collection>(collection: C) => string
