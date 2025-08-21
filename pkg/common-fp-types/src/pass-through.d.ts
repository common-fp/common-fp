import type { UnknownFunction } from '@common-fp/shared-types'

declare function passThrough<LastFn extends UnknownFunction>(
  value: unknown,
  fnArray: readonly [...UnknownFunction[], LastFn]
): ReturnType<LastFn>

declare function passThrough(
  value: unknown,
  fnArray: readonly UnknownFunction[]
): unknown

export default passThrough
