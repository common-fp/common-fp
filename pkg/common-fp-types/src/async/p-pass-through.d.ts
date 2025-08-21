import type { UnknownFunction } from '@common-fp/shared-types'

declare function passThroughAsync<LastFn extends UnknownFunction>(
  value: unknown,
  fnArray: readonly [...UnknownFunction[], LastFn]
): Promise<Awaited<ReturnType<LastFn>>>

declare function passThroughAsync(
  value: unknown,
  fnArray: ReadonlyArray<UnknownFunction>
): Promise<unknown>

export default passThroughAsync
