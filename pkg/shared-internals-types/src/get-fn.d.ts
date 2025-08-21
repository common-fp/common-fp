import type { UnknownFunction } from '@common-fp/shared-types'

export default function <T extends Record<string, UnknownFunction>>(
  typeToFn: T,
  arg: unknown,
  argName: string,
  utilName: string
): T[keyof T]
