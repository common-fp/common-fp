import type { UnknownFunction } from '@common-fp/shared-types'

export default function <T extends Record<string, UnknownFunction>>(
  typeToFn: T,
  argType: string,
  argName: string,
  utilName: string
): T[keyof T]
